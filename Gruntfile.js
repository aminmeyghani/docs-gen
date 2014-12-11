// Docs-gen
// Amin Meyghani
// Dec 9, 2014
// ------------
module.exports = function(grunt) {
	// load'em all ...
	require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-*']});
	
	grunt.initConfig({
		docsGen: {
		srcPath : "public/src",
		docsMdOutput : "public/docs/markdown-pages",
		docsHtmlOutput: "public/docs/documentations",
		docsHtmlTemplate: "public/docs",
		devPath: "public",
		privatePath: "_private"
		},
		
		// Tasks !
		markdox: {
			sass_docs: {
			files: [
					{
						expand: true,                            // Enable dynamic expansion.
						cwd: '../src',                           // Src matches are relative to this path.
						src: ["**/*.js"],                      // Actual pattern(s) to match.
						dest: '<%= docsGen.docsMdOutput %>' ,    // Destination path prefix.
						ext: '.md'                               // Dest filepaths will have this extension.
					}
				]
			}
			// Other sources defined with a target...
			// EXAMPLE
			// ------------
			// , less_docs: {
			// files: [
			// 		{
			// 			expand: true,                             // Enable dynamic expansion.
			// 			cwd: '../less',                           // Src matches are relative to this path.
			// 			src: ["**/*.less"],                       // Actual pattern(s) to match.
			// 			dest: '<%= docsGen.docsMdOutput %>' ,     // Destination path prefix.
			// 			ext: '.md'                                // Dest filepaths will have this extension.
			// 		}
			// 	]
			// }
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
		clean: {
			htmlDocs: ["<%= docsGen.docsHtmlOutput %>/**/*.htm","<%= docsGen.docsHtmlOutput %>"],
			mdDocs: ["<%= docsGen.docsMdOutput %>"],
			links: ["<%= docsGen.srcPath %>/routes/docs-raw.htm", "<%= docsGen.srcPath %>/routes/docs.htm"]
		},
		watch: {
			styles: {
				files: ['../**/*.scss'], // which files to watch
				tasks: ['default'],
				options: {
				nospawn: true
				}
			}
		},
		to_html: {
			links: {
				// needs path to jade specifically, couldn't interpolate
				options: {useFileNameAsTitle: true, templatingLanguage: "jade", template: grunt.file.read("public/src/routes/docs.jade"), rootDirectory: "<%= docsGen.docsHtmlTemplate %>"},
				files: {'<%= docsGen.srcPath %>/routes/docs-raw.htm': '<%= docsGen.docsHtmlTemplate %>/documentations/**/*.htm'}
			}
		},
		replace: {
			docs_navs: {
				src: ['<%= docsGen.srcPath %>/routes/docs-raw.htm'],             // source files array (supports minimatch)
				dest: '<%= docsGen.srcPath %>/routes/docs.htm',             // destination directory or file
				replacements: [
					{
						from: '<%= docsGen.docsHtmlTemplate %>/documentations/',
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

	// and register ...
	grunt.registerTask('default', ['docs', 'links']);
	grunt.registerTask('links', ['clean:links', 'to_html', 'replace:docs_navs']);
	grunt.registerTask('docs', ['clean', 'markdox', 'concat', 'markdown']);
	grunt.registerTask('mdDocs', ['clean:mdDocs','markdox']);
};
