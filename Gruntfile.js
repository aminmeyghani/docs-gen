module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-*']});
  grunt.initConfig({
    docsGen: {
      srcPath : "public/src",
      docsMdOutput : "public/docs/markdown-pages",
      docsHtmlOutput: "public/docs/documentations",
      docsHtmlTemplate: "public/docs",
      docSrcExtension: ".less",
      srcPaths: ["../sass-testing/functions/**/*.scss"],
      devPath: "public",
      privatePath: "_private"
    },
    // Doc generation tasks.
    markdox: {
      sass_docs: {
        files: [
          {
            expand: true,                               // Enable dynamic expansion.
            cwd: '/Users/aminmeyghani/docs_libs_projects/node/sassmin',      // Src matches are relative to this path.
            src: ["functions/**/*.scss"],               // Actual pattern(s) to match.
            dest: '<%= docsGen.docsMdOutput %>' , // Destination path prefix.
            ext: '.md'                                  // Dest filepaths will have this extension.
            }
          ]
        },
        less_docs: {
          files: [
            {
              expand: true,                               // Enable dynamic expansion.
              cwd: '/Users/aminmeyghani/Desktop/less-sample',      // Src matches are relative to this path.
              src: ["**/*.less"],               // Actual pattern(s) to match.
              dest: '<%= docsGen.docsMdOutput %>' , // Destination path prefix.
              ext: '.md'                                  // Dest filepaths will have this extension.
              }
            ]
          }
    },
    markdown: {
      all: {
        files: [
          {
            expand: true,
            cwd: '<%= docsGen.docsMdOutput %>',
            src: '**/*.md',
            dest: '<%= docsGen.docsHtmlOutput %>',
            ext: '.htm'
          }
        ],
        options: {
          template: '<%= docsGen.docsHtmlTemplate %>/template.html',
          markdownOptions: {
            gfm: true,
            highlight: "auto",
            codeLines: {
              before: '<span>',
              after: '</span>'
            }
          }
        }
      },
    },
    concat: {
      dist: {
        src: ['<%= docsGen.docsMdOutput %>/**/*.md'],
        dest: '<%= docsGen.docsMdOutput %>/All/all.md',
      },
    },
    // Compiling LESS src.
    less: {
      dev: {
        files: {
          "<%= docsGen.privatePath %>/less-shell-css/main.css": "<%= docsGen.devPath %>/src/main.less"
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          "<%= docsGen.privatePath %>/less-shell-css/main.min.css": "<%= docsGen.privatePath %>/less-shell-css/main.css"
        }
      }
    },
    // Cleaning things up ...
    clean: {
      htmlDocs: ["<%= docsGen.docsHtmlOutput %>/**/*.htm","<%= docsGen.docsHtmlOutput %>"],
      mdDocs: ["<%= docsGen.docsMdOutput %>"],
      links: ["public/src/routes/docs-raw.htm", "public/src/routes/docs.htm"]
    },
    // watch changes to trigger css 
    watch: {
      styles: {
        files: ['<%= docsGen.devPath %>/src/**/*.less'], // which files to watch
        tasks: ['less', 'cssmin'],
        options: {
          nospawn: true
        }
      }
    },
    // to_html: {
    //   'dest/index.html': 'public/docs/documentations/**/*.htm'
    // }
    to_html: {
      links: {
        // Target-specific file lists and/or options go here e.g.
        options: {useFileNameAsTitle: true, templatingLanguage: "jade", template: grunt.file.read('public/src/routes/docs.jade'), rootDirectory: "public/docs"},
        files: {'public/src/routes/docs-raw.htm': 'public/docs/documentations/**/*.htm'}
      }
    },
    replace: {
      docs_navs: {
          src: ['public/src/routes/docs-raw.htm'],             // source files array (supports minimatch)
          dest: 'public/src/routes/docs.htm',             // destination directory or file
          replacements: [{
            from: 'public/docs/documentations/',
            to: '#/docs/'
          },
          {
            from: '.htm',
            to: ''
          }
          ]
        }
      }

   
  })

  // Load the plugin that provides the "uglify" task.
  
  // Default task(s).
  grunt.registerTask('default', ['docs', 'links']);
  grunt.registerTask('links', ['clean:links', 'to_html', 'replace:docs_navs']);
  grunt.registerTask('docs', ['clean', 'markdox', 'concat', 'markdown']);
  grunt.registerTask('mdDocs', ['clean:mdDocs','markdox']);
  grunt.registerTask('watch-less', ['watch']);
};