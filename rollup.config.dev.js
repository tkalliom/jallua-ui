import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';

export default {
  entry: 'scripts/app/main-dev.js',
  dest: 'dist/scripts/bundle.js',
  format: 'iife',
  treeshake: true,
  plugins: [
    nodeResolve({jsnext: true}),
    commonJs({
      include: ['**/rxjs/**', '**/angular2-google-maps/**']
    })
  ],
  onwarn: function (message) {
    // As per https://angular.io/docs/ts/latest/cookbook/aot-compiler.html these are safe to ignore
    if (/The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten./.test(message)) {
      return;
    }
    console.error(message);
  }
};
