/* Gruntfile.js - Devin T. Currie */

module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    // Bootstrap config
    var path = require('path');
    var configBridge = grunt.file.readJSON('./libs/bootstrap/grunt/configBridge.json', {encoding: 'utf8'});

    Object.keys(configBridge.paths).forEach(function (key) {
        configBridge.paths[key].forEach(function (val, i, arr) {
            arr[i] = path.join('./libs/bootstrap/docs/assets', val);
        });
    });

    // Grunt task config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Check JS Code for formatting and errors
        jshint: {
            // Files to check
            files: ['Gruntfile.js', 'assets/js/*.js', '!assets/js/*.min.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        // Compile LESS files
        less: {
            // Bootstrap Core
            compileBootstrapCore: {
                options: {
                    strictMath: true
                },
                src: 'libs/bootstrap/less/bootstrap.less',
                dest: 'assets/css/bootstrap.css'
            },
            // Custom Theme
            compileBootstrapTheme: {
                options: {
                    strictMath: true
                },
                src: 'libs/bootstrap/less/theme.less',
                dest: 'assets/css/<%= pkg.name %>-theme.css'
            }//,
            //// Custom Site Less
            //compileSite: {
            //    options: {
            //        strictMath: true
            //    },
            //    src: 'assets/less/raw/site.less',
            //    dest: 'assets/css/raw/site.css'
            //}
        },
        // Uglify JS files
        uglify: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/js/',
                    src: ['*.js', '!*.min.js'],
                    dest: 'public/js/',
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.js', '.min.js');
                    }
                }]
            }
        },
        // Minify CSS files
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false,
                sourceMap: true
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        // Add banners to uglified/minified JS/CSS files
        usebanner: {
            addBanners: {
                options: {
                    position: 'top',
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
                    linebreak: true
                },
                files: {
                    src: [
                        'public/css/*.min.css',
                        'public/css/*.min.js'
                    ]
                }
            }
        },
        // Add package version to link/script calls in index.html
        cache_control: {
            index: {
                source: "public/index.html",
                options: {
                    version: "<%= pkg.version %>",
                    links: true,
                    scripts: true,
                    replace: true,
                    ignoreCDN: true
                }
            }
        },
        // Copy lib fonts to public folder
        copy: {
            jQueryJS: {
                expand: true,
                cwd: 'libs/jquery/dist/',
                src: ['jquery.min.*'],
                dest: 'public/js'
            },
            angularJS: {
                expand: true,
                cwd: 'libs/angular/',
                src: ['angular.min.*', '!angular.min.js.gzip'],
                dest: 'public/js'
            },
            angularUiRouterJS: {
                expand: true,
                cwd: 'libs/angular-ui-router/release',
                src: ['angular-ui-router.min.*'],
                dest: 'public/js'
            },
            bootstrapJS: {
                expand: true,
                cwd: 'libs/bootstrap/dist/js/',
                src: ['bootstrap.min.js'],
                dest: 'public/js'
            },
            bootstrapFonts: {
                expand: true,
                cwd: 'libs/bootstrap/dist/fonts/',
                src: ['**'],
                dest: 'public/fonts'
            },
            fontawesomeCSS: {
                expand: true,
                cwd: 'libs/font-awesome/css/',
                src: ['font-awesome.css.map', 'font-awesome.min.css'],
                dest: 'public/css'
            },
            fontawesomeFonts: {
                expand: true,
                cwd: 'libs/font-awesome/fonts/',
                src: ['*', '!4.4.0'],
                dest: 'public/fonts'
            }
        },
        // Minify Images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/imgs/',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'public/imgs/'
                }]
            }
        },
        watch: {
            bootstrap: {
                files: ['libs/bootstrap/less/theme.less', 'libs/bootstrap/less/variables.less'],
                tasks: ['less:compileBootstrapTheme']
            },
            js: {
                files: ['assets/js/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['assets/css/*.css'],
                tasks: ['cssmin']
            },
            //less: {
            //    files: ['assets/less/raw/*.less'],
            //    tasks: ['less:compileSite']
            //},
            fonts: {
                files: ['assets/fonts/*.css'],
                tasks: ['cssmin', 'copy:fontawesomeFonts', 'copy:bootstrapFonts']
            },
            images: {
                files: ['assets/imgs/*'],
                tasks: ['imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-cache-control');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks, run in order declared
    grunt.registerTask('default', ['jshint', 'less', 'uglify', 'cssmin', 'copy', 'usebanner', 'cache_control', 'imagemin', 'watch']);
};