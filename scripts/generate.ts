import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'svg-parser';
import { changeCase } from './change-case';
import { createTag, getChildContent, getViewBox } from './svg-helpers';
import * as Handlebars from 'handlebars';

const iconTemplate = Handlebars.compile(
  fs.readFileSync(path.join(__dirname, 'andro-template.hbs'), 'utf-8')
);

const ICON_DIR = '../Androicons';
const SRC_ICON_DIR = '../packages/icon/src/lib';
const SRC_ICON_INDEX = path.join(__dirname, '../packages/icon/src/lib/index.ts');

const SRC_ICON_MAPPER = '../packages/icon/src/IconNameMapper.ts';

const ICON_NAMES = [];
let flg = 0;
if (fs.existsSync(SRC_ICON_INDEX)) {
  fs.unlinkSync(SRC_ICON_INDEX);
}

fs.readdir(path.join(__dirname, ICON_DIR), (err, files) => {
  if (err) console.error("Could't read the directory");

  fs.writeFileSync(
    path.join(__dirname, SRC_ICON_MAPPER),
    'export const IconNameMapper = {'
  );
  files.forEach(file => {
    fs.appendFileSync(path.join(__dirname, SRC_ICON_MAPPER), flg === 0 ? '\n' : `,\n`);
    flg ++;
    const icon = fs.readFileSync(path.join(__dirname, ICON_DIR, file), {
      encoding: 'utf-8',
    });
    const iconObj = parse(icon);
    
    const fileName = file.split('.')[0];
    
    console.log('File name = ', fileName)
    ICON_NAMES.push(fileName)

    const componentName = changeCase(fileName, {
      input: 'kebab-case',
      output: 'PascalCase',
    });
    const componentFile = `${fileName}.tsx`;

    const viewBox = getViewBox(iconObj);

    const childContent = getChildContent(iconObj);
    const tags = childContent.map(child =>
      createTag(child.tagName, child.properties)
    );

    const data = {
      viewBox,
      componentName,
      tags,
    };


    fs.writeFileSync(
      path.join(__dirname, SRC_ICON_DIR, componentFile),
      iconTemplate(data)
    );
    
    fs.appendFileSync(path.join(__dirname, SRC_ICON_MAPPER), `  ${fileName} : '${fileName}'`);
    fs.appendFileSync(SRC_ICON_INDEX, `export * from './${fileName}';\n`);
  });

  fs.appendFileSync(path.join(__dirname, SRC_ICON_MAPPER), `\n}`);
});
