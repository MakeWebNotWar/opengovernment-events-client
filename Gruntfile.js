// Generated on 2014-02-09 using generator-ember 0.8.1
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var yeomanConfig = {
    src: 'app',
    dev: 'dev',
    prod: 'prod'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      compass: {
        files: '<%= yeoman.src %>/sass/*.scss',
        tasks: ['compass:src']
      },
      // emblem: {
      //   files: '<%= yeoman.src %>/templates/**/*.emblem',
      //   tasks: ['emblem:dev']
      // },
      hamlbars: {
        files: '<%= yeoman.src %>/templates/**/*.hamlbars',
        tasks: ['hamlbars:src', 'emberTemplates:src']
      },
      haml:{
        files: '<%= yeoman.src %>/**/*.haml',
        tasks: ['haml:src', 'replace:src']
      },
      neuter: {
        files: ['<%= yeoman.src %>/scripts/{,*/}*.js'],
        tasks: ['neuter']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.dev %>/scripts/*.js',
          '<%= yeoman.src %>/*.html',
          '{<%= yeoman.dev %>,<%= yeoman.src %>}/styles/{,*/}*.scss',
          '<%= yeoman.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, 'dev'),
              mountFolder(connect, '<%= yeoman.src %>')
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, 'dev'),
              mountFolder(connect, 'test')
            ];
          }
        }
      },
      dev: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, '<%= yeoman.dev %>')
            ];
          }
        }
      }
    },
    clean: {
      dev: {
        files: [{
          dot: true,
          src: [
            'dev',
            '<%= yeoman.dev %>/*',
            '!<%= yeoman.dev %>/.git*'
          ]
        }]
      },
      server: 'dev'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/scripts/{,*/}*.js',
        '!<%= yeoman.src %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dev: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dev: {}
    },*/
    rev: {
      dev: {
        files: {
          src: [
            '<%= yeoman.dev %>/scripts/{,*/}*.js',
            '<%= yeoman.dev %>/styles/{,*/}*.css',
            '<%= yeoman.dev %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dev %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: 'dev/index.html',
      options: {
        dest: '<%= yeoman.dev %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dev %>/{,*/}*.html'],
      css: ['<%= yeoman.dev %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dev %>']
      }
    },
    imagemin: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dev %>/images'
        }]
      }
    },
    svgmin: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dev %>/images'
        }]
      }
    },
    // cssmin: {
    //     dev: {
    //         files: {
    //             '<%= yeoman.dev %>/styles/main.css': [
    //                 'dev/styles/{,*/}*.css',
    //                 '<%= yeoman.src %>/styles/{,*/}*.css'
    //             ]
    //         }
    //     }
    // },
    // htmlmin: {
    //   dev: {
    //     options: {
    //       removeCommentsFromCDATA: true,
    //       // https://github.com/yeoman/grunt-usemin/issues/44
    //       //collapseWhitespace: true,
    //       collapseBooleanAttributes: true,
    //       removeAttributeQuotes: true,
    //       removeRedundantAttributes: true,
    //       useShortDoctype: true,
    //       removeEmptyAttributes: true,
    //       removeOptionalTags: true
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= yeoman.src %>',
    //       src: '*.html',
    //       dest: '<%= yeoman.dev %>'
    //     }]
    //   }
    // },
    replace: {
      src: {
        options: {
          variables: {
            app: 'js/app.js',
            ember: 'js/libs/ember/ember.js',
            ember_data: 'js/libs/ember-data/ember-data.js',
            handlebars: 'js/libs/handlebars/handlebars.runtime.js',
            jquery: 'js/libs/jquery/jquery.js',
            templates: 'js/templates/templates.js'
          }
        },
        files: [
          {src: '<%= yeoman.dev %>/index.html', dest: '<%= yeoman.dev %>/index.html'}
        ]
      },
      dev: {
        options: {
          variables: {
          ember: 'js/libs/ember/ember.prod.js',
          ember_data: 'js/libs/ember-data/ember-data.prod.js'
          }
        },
        files: [
          {src: '<%= yeoman.tmp %>/index.html', dest: '<%= yeoman.prod %>/index.html'}
        ]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      src: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/bower_components/',
          src: [
            'ember/ember.js', 
            'ember-data/ember-data.js', 
            'jquery/jquery.js', 
            'handlebars/handlebars.runtime.js'
          ],
          dest: '<%= yeoman.dev %>/js/libs/'
        }]
      }
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.src %>/sass',
        cssDir: '<%= yeoman.dev %>/css',
        relativeAssets: false,
        importPath: '<%= yeoman.src %>/sass'
      },
      src: {
        sassDir: '<%= yeoman.src %>/sass',
        cssDir: '<%= yeoman.dev %>/css'
      }
      // bootstrap: {
      //   options: {
      //     sassDir: '<%= yeoman.src %>/libs/bootstrap-sass-src/sass/',
      //     cssDir: '<%= yeoman.dev %>/css/bootstrap/',
      //     relativeAssets: false,
      //     importPath: '<%= yeoman.src %>/libs'
      //   }
      // }
    },
    concurrent: {
      server: [
        'emblem',
      ],
      test: [
        'emblem',
      ],
      dev: [
        'emblem',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    emberTemplates: {
      options: {
        templateName: function (sourceFile) {
          var templatePath = '<%= yeoman.src %>' + '/templates/';
          return sourceFile.replace(templatePath, '');
        }
      },
      dist: {
        files: {
          '<%= yeoman.dev %>/scripts/templates/templates.js': '<%= yeoman.src %>/templates/**/*.hbs'
        }
      }
    },
    // emblem: {
    //   dev: {
    //     files: {
    //       '<%= yeoman.dev %>/js/templates/templates.js':'<%= yeoman.src %>/templates/**/*.emblem'
    //     },
    //     options: {
    //       root: '<%= yeoman.src %>/scripts/templates/',
    //       dependencies: {
    //         jquery:     '<%= yeoman.src %>/bower_components/jquery/jquery.js',
    //         ember:      '<%= yeoman.src %>/bower_components/ember/ember.js',
    //         emblem:     '<%= yeoman.src %>/bower_components/emblem.js/emblem.js',
    //         handlebars: '<%= yeoman.src %>/bower_components/handlebars/handlebars.js'
    //       }
    //     }
    //   }
    // },
    haml: {
      src: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: '<%= yeoman.src %>/',
            src: '{,*/}*.haml',
            dest: '<%= yeoman.dev %>/',   // Destination path prefix.
            ext: '.html'   // Dest filepaths will have this extension.
          }
        ]
      }
    },
    hamlbars: {
      src: {
        files: [
          expand: true, cwd: '<%= yeoman.src %>/', src: 'templates/**/*.hamlbars', dest: '<%= yeoman.src %>/templates/', ext: '.handlebars'
        ]
      }
    },
    neuter: {
      src: {
        options: {
          filepathTransform: function (filepath) {
            return yeomanConfig.src + '/' + filepath;
          }
        },
        src: '<%= yeoman.src %>/scripts/app.js',
        dest: '<%= yeoman.dev %>/js/app.js'
      }
    }
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dev') {
      return grunt.task.run(['build', 'open', 'connect:dev:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'haml:src',
      'copy:src',
      'hamlbars:src',
      'emberTemplates:src',
      'compass:src',
      'replace:src',
      'concurrent:server',
      'neuter:src',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'replace:src',
    'concurrent:test',
    'connect:test',
    'neuter:src',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dev',
    'replace:dev',
    'useminPrepare',
    'concurrent:dev',
    'neuter:src',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
