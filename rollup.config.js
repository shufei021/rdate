import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import requireContext from 'rollup-plugin-require-context'
export default {
    input: `src/index.js`,
    output: {
        file: `./build/index.js`,
        format: 'umd',
        name: 'rdate',
        sourcemap: false
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        requireContext(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        }),
        uglify()
    ]
}
