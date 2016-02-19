module.exports = function(grunt) {
    grunt.initConfig({
        typescript: {
            "test": {
                options: {
                    "module": "commonjs",
                    "target": "es5",
                    "jsx": "react",
                    "sourceMap": true,
                    "emitDecoratorMetadata": true,
                    "experimentalDecorators": true,
                    "outDir": "dist"
                },
                files: [{
                    dest: "tmp/test/",
                    src: [
                        "src/__tests__/**/*.ts",
                    ]
                }]
            }
        },
        mochaTest: {
            test: {
                src: ["tmp/test/**/*.js"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.registerTask("test", [
        "typescript:test",
        "mochaTest:test"
    ]);

    grunt.registerTask("default", ["test"]);
};
