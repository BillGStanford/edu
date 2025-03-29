// Enhanced course data with detailed overview and resources content
const courseData = {
    courses: [
      {
        id: 'web-development-basics',
        title: 'Web Development Basics',
        description: 'Learn HTML, CSS, and JavaScript fundamentals to build your first website. Master the core building blocks of modern web development through practical exercises and real-world projects.',
        image: '/thumbnail-images/webdev-basics.jpg',
        category: 'Web Development',
        level: 'Beginner',
        instructor: {
          name: 'Natoli Lemessa',
          role: 'Senior Instructor',
          bio: 'Expert with over 10 years of experience in web development. Has taught at leading universities and helped thousands of students master web technologies through practical, easy-to-understand lessons.',
          avatar: '/api/placeholder/80/80',
          rating: 4.8,
          courseCount: 12
        },
        overview: {
          description: 'This comprehensive course is designed to take you from beginner to proficient, covering all the essential topics of web development and providing hands-on practice to reinforce your learning. By the end of this course, you will have built several responsive websites from scratch and gained the confidence to create your own web projects.',
          learningOutcomes: [
            'Core HTML5 structure, semantic elements, and best practices',
            'CSS styling techniques including Flexbox and CSS Grid',
            'JavaScript fundamentals and DOM manipulation',
            'Responsive design principles for mobile-first development',
            'Form handling and validation techniques',
            'Website optimization and performance best practices',
            'Version control basics with Git and GitHub',
            'Deploying your first website to a live server'
          ],
          requirements: [
            'Basic understanding of computers and file management',
            'No prior coding experience required',
            'A modern web browser (Chrome, Firefox, or Edge recommended)',
            'Text editor (VS Code recommended, but not required)',
            'Desire to learn and approximately 5 hours per week for practice'
          ],
          targetAudience: [
            'Complete beginners with no prior web development experience',
            'Self-taught developers looking to fill knowledge gaps',
            'Design professionals wanting to expand their skill set',
            'Students preparing for more advanced web development courses',
            'Professionals transitioning to tech careers'
          ]
        },
        resources: {
          downloadables: [
            {
              title: 'Complete Course Workbook',
              description: 'Comprehensive guide with all course concepts, examples, and exercises',
              fileType: 'PDF',
              fileSize: '2.4MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'HTML & CSS Cheat Sheet',
              description: 'Quick reference guide for all common elements and properties',
              fileType: 'PDF',
              fileSize: '1.8MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'Starter Project Files',
              description: 'All the starter code and assets needed for course projects',
              fileType: 'ZIP',
              fileSize: '5.3MB',
              icon: 'FaFileArchive'
            },
            {
              title: 'JavaScript Reference Guide',
              description: 'In-depth coverage of JavaScript concepts with examples',
              fileType: 'PDF',
              fileSize: '3.1MB',
              icon: 'FaFilePdf'
            }
          ],
          externalResources: [
            {
              title: 'MDN Web Docs',
              description: 'Comprehensive reference documentation for web technologies',
              url: 'https://developer.mozilla.org/'
            },
            {
              title: 'W3Schools Tutorials',
              description: 'Additional tutorials and interactive examples for practice',
              url: 'https://www.w3schools.com/'
            },
            {
              title: 'Course Community Forum',
              description: 'Connect with other students and get help from instructors',
              url: 'https://community.learningplatform.com/web-basics'
            },
            {
              title: 'CodePen',
              description: 'Practice your skills and see immediate results',
              url: 'https://codepen.io/'
            }
          ],
          recommendedBooks: [
            {
              title: 'HTML & CSS: Design and Build Websites',
              author: 'Jon Duckett',
              description: 'Visual guide to HTML and CSS fundamentals with clear explanations and examples.'
            },
            {
              title: 'JavaScript: The Good Parts',
              author: 'Douglas Crockford',
              description: 'Essential guide to JavaScript best practices and avoiding common pitfalls.'
            },
            {
              title: 'Responsive Web Design with HTML5 and CSS',
              author: 'Ben Frain',
              description: 'Learn to create sites that work across a range of devices and screen sizes.'
            },
            {
              title: 'Don\'t Make Me Think',
              author: 'Steve Krug',
              description: 'Classic guide to web usability and creating user-friendly websites.'
            }
          ]
        },
          // New added lessonVideos section
          lessonVideos: [
            {
              lessonId: 'html-basics',
              title: 'HTML Basics Tutorial',
              videoUrl: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
              duration: '35:12',
              description: 'Learn the fundamentals of HTML structure, tags, and semantic elements'
            },
            {
              lessonId: 'css-basics',
              title: 'CSS Fundamentals',
              videoUrl: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
              duration: '40:05',
              description: 'Master CSS selectors, properties, and the box model'
            },
            {
              lessonId: 'javascript-intro',
              title: 'JavaScript for Beginners',
              videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
              duration: '45:18',
              description: 'Introduction to JavaScript concepts and DOM manipulation'
            },
            {
              lessonId: 'responsive-design',
              title: 'Responsive Web Design Tutorial',
              videoUrl: 'https://www.youtube.com/watch?v=srvUrASNj0s',
              duration: '30:45',
              description: 'Learn to create websites that look great on any device'
            },
            {
              lessonId: 'forms-validation',
              title: 'HTML Forms and JavaScript Validation',
              videoUrl: 'https://www.youtube.com/watch?v=Znveb64WJ9w',
              duration: '35:22',
              description: 'Create user-friendly forms with proper validation techniques'
            }
          ],
        lessons: [
          {
            id: 'html-basics',
            title: 'HTML Basics',
            content: 'Introduction to HTML structure, tags, and elements. Learn how to create well-structured HTML documents with proper semantics.',
            duration: 35
          },
          {
            id: 'css-basics',
            title: 'CSS Basics',
            content: 'Learn to style your HTML with CSS. Master selectors, properties, and the box model to create visually appealing layouts.',
            duration: 40
          },
          {
            id: 'javascript-intro',
            title: 'JavaScript Introduction',
            content: 'Basic JavaScript concepts and DOM manipulation. Learn how to make your web pages interactive with event handling.',
            duration: 45
          },
          {
            id: 'responsive-design',
            title: 'Responsive Design',
            content: 'Learn how to create websites that look great on any device using media queries and flexible layouts.',
            duration: 30
          },
          {
            id: 'forms-validation',
            title: 'Forms and Validation',
            content: 'Create user-friendly forms with proper HTML structure and JavaScript validation techniques.',
            duration: 35
          }
        ],
        quizzes: [
          {
            id: 'html-quiz',
            title: 'HTML Quiz',
            description: 'Test your knowledge of HTML basics',
            questions: [
              {
                id: 'q1',
                question: 'What does HTML stand for?',
                options: [
                  'Hyper Text Markup Language',
                  'High Tech Machine Learning',
                  'Hyper Transfer Markup Language',
                  'Hyperlink Text Management Language'
                ],
                correctAnswer: 0
              },
              {
                id: 'q2',
                question: 'Which tag is used to create a hyperlink?',
                options: ['<link>', '<a>', '<href>', '<url>'],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: 'Which HTML element is used to define the title of a document?',
                options: ['<head>', '<title>', '<header>', '<meta>'],
                correctAnswer: 1
              }
            ]
          },
          {
            id: 'css-quiz',
            title: 'CSS Quiz',
            description: 'Test your knowledge of CSS basics',
            questions: [
              {
                id: 'q1',
                question: 'What does CSS stand for?',
                options: [
                  'Cascading Style Sheets',
                  'Creative Style System',
                  'Computer Style Sheets',
                  'Colorful Style Sheets'
                ],
                correctAnswer: 0
              },
              {
                id: 'q2',
                question: 'Which property is used to change the background color?',
                options: ['color', 'bgcolor', 'background-color', 'background'],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: 'Which CSS property controls the text size?',
                options: ['text-size', 'font-size', 'text-style', 'font-style'],
                correctAnswer: 1
              }
            ]
          },
          {
            id: 'javascript-quiz',
            title: 'JavaScript Quiz',
            description: 'Test your understanding of JavaScript fundamentals',
            questions: [
              {
                id: 'q1',
                question: 'Which symbol is used for comments in JavaScript?',
                options: ['#', '//', '<!-- -->', '**'],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: 'How do you declare a JavaScript variable?',
                options: ['variable myVar;', 'v myVar;', 'var myVar;', 'val myVar;'],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: 'Which event occurs when a user clicks on an HTML element?',
                options: ['onchange', 'onclick', 'onmouseover', 'onmouseclick'],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: 'beginners-english',
        title: 'Beginners English',
        description: 'Master fundamental English language skills for everyday communication. Learn vocabulary, grammar, pronunciation, and build confidence in speaking and writing through interactive exercises and real-world practice.',
        image: '/thumbnail-images/beginners-english.jpg',
        category: 'Language Learning',
        level: 'Beginner',
        instructor: {
          name: 'Natoli Lemessa',
          role: 'Language Expert',
          bio: 'Certified TEFL instructor with 12+ years of experience teaching English to non-native speakers. Known for her engaging teaching style that makes learning English accessible and enjoyable for beginners.',
          avatar: '/api/placeholder/80/80',
          rating: 4.7,
          courseCount: 9
        },
        overview: {
          description: 'This comprehensive course is designed for complete beginners who want to learn English for everyday communication. Through engaging activities, authentic conversations, and practical exercises, you\'ll develop essential skills in reading, writing, listening, and speaking. By the end of the course, you\'ll be able to confidently handle common situations in English and have a solid foundation for further language study.',
          learningOutcomes: [
            'Master essential English vocabulary for everyday situations',
            'Understand and use basic grammar structures correctly',
            'Develop clear pronunciation and natural speaking rhythm',
            'Build confidence in basic conversations and interactions',
            'Read and understand simple English texts',
            'Write short, clear messages and descriptions',
            'Recognize and respond to common questions and phrases',
            'Navigate everyday situations like shopping, ordering food, and asking for directions'
          ],
          requirements: [
            'No prior English knowledge required',
            'Willingness to practice regularly (recommended 30 minutes daily)',
            'Notebook for vocabulary and grammar notes',
            'Computer or mobile device with audio capabilities',
            'Patience and positive attitude toward learning'
          ],
          targetAudience: [
            'Complete beginners with no prior English knowledge',
            'Travelers planning to visit English-speaking countries',
            'Professionals needing basic English for work',
            'Students preparing for more advanced language courses',
            'Anyone wanting to learn English for personal development'
          ]
        },
        resources: {
          downloadables: [
            {
              title: 'English Vocabulary Flashcards',
              description: 'Printable flashcards covering all essential vocabulary from the course',
              fileType: 'PDF',
              fileSize: '3.2MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'Grammar Reference Guide',
              description: 'Comprehensive guide to basic English grammar structures',
              fileType: 'PDF',
              fileSize: '2.5MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'Pronunciation Audio Files',
              description: 'MP3 files for practicing correct pronunciation of difficult sounds',
              fileType: 'ZIP',
              fileSize: '18.7MB',
              icon: 'FaFileArchive'
            },
            {
              title: 'Practice Dialogues Workbook',
              description: 'Written exercises and fill-in-the-blank dialogues for extra practice',
              fileType: 'PDF',
              fileSize: '4.1MB',
              icon: 'FaFilePdf'
            }
          ],
          externalResources: [
            {
              title: 'English Language Learning Community',
              description: 'Connect with other learners and practice your skills',
              url: 'https://community.learningplatform.com/english-beginners'
            },
            {
              title: 'BBC Learning English',
              description: 'Free resources for additional practice and exposure',
              url: 'https://www.bbc.co.uk/learningenglish/'
            },
            {
              title: 'Graded Reading Materials',
              description: 'Simple stories and articles for beginners',
              url: 'https://learnenglish.britishcouncil.org/skills/reading'
            },
            {
              title: 'English Pronunciation App',
              description: 'Mobile app for practicing pronunciation anywhere',
              url: 'https://pronuncian.com/app'
            }
          ],
          recommendedBooks: [
            {
              title: 'English for Everyone: Level 1',
              author: 'DK Publishing',
              description: 'Visual guide to English grammar and vocabulary with practice exercises.'
            },
            {
              title: 'Essential English Grammar',
              author: 'Raymond Murphy',
              description: 'Clear explanations of basic grammar points with plenty of examples.'
            },
            {
              title: 'Oxford Picture Dictionary',
              author: 'Jayme Adelson-Goldstein',
              description: 'Illustrated dictionary that connects words with images for better retention.'
            },
            {
              title: 'Easy Reading for ESL Beginners',
              author: 'Elizabeth Laird',
              description: 'Collection of simple stories designed specifically for English learners.'
            }
          ]
        },
        lessonVideos: [
            {
              lessonId: 'greetings-introductions',
              title: 'Basic Greetings and Introductions',
              videoUrl: 'https://youtu.be/sp3xU5WvRjA?si=TZC7xgBGiLE5qEBJ',
              duration: '11:24',
              description: 'Learn how to introduce yourself and greet people in different situations'
            },
            {
              lessonId: 'everyday-vocabulary',
              title: 'Essential Everyday Vocabulary',
              videoUrl: 'https://youtu.be/ju-Z9Hv0mT8?si=LB2_whtQtgvRO0qB',
              duration: '8:17',
              description: 'Enhance your vocabulary with practical words for everyday communication'
            },
            {
              lessonId: 'basic-grammar',
              title: 'Present Simple Tense and Basic Sentence Structure',
              videoUrl: 'https://youtu.be/Z19NAX_gWxI?si=k5JdCHMawLbgzrLb',
              duration: '36:09',
              description: 'Understanding present simple tense and forming basic sentences in English'
            },
            {
              lessonId: 'asking-questions',
              title: 'Asking and Answering Questions',
              videoUrl: 'https://youtu.be/t4yWEt0OSpg?si=f8-VUm-Fm-bjbdgW',
              duration: '10:14',
              description: 'Master the different question types and learn how to ask and answer effectively'
            },
            {
              lessonId: 'pronunciation-basics',
              title: 'English Pronunciation Fundamentals',
              videoUrl: 'https://youtu.be/n4NVPg2kHv4?si=d575gmPUM6aT7IhK',
              duration: '7:46',
              description: 'Improve your English accent and pronunciation with easy-to-follow techniques'
            }
          ],
          
        lessons: [
          {
            id: 'greetings-introductions',
            title: 'Basic Greetings and Introductions',
            content: 'Learn essential phrases for greeting people, introducing yourself, and having simple conversations about who you are and where you\'re from.',
            duration: 25
          },
          {
            id: 'everyday-vocabulary',
            title: 'Essential Everyday Vocabulary',
            content: 'Build your vocabulary with the most common words and phrases needed for daily situations like shopping, eating out, and traveling.',
            duration: 30
          },
          {
            id: 'basic-grammar',
            title: 'Basic Grammar Structures',
            content: 'Master fundamental grammar including present simple tense, articles, pronouns, and basic sentence structure.',
            duration: 35
          },
          {
            id: 'asking-questions',
            title: 'Asking and Answering Questions',
            content: 'Learn how to form different types of questions and provide appropriate responses in everyday conversations.',
            duration: 28
          },
          {
            id: 'pronunciation-basics',
            title: 'Pronunciation Fundamentals',
            content: 'Practice the core sounds of English and develop clear pronunciation habits from the beginning of your language journey.',
            duration: 32
          }
        ],
        quizzes: [
          {
            id: 'vocabulary-quiz',
            title: 'Essential Vocabulary Quiz',
            description: 'Test your knowledge of basic English vocabulary',
            questions: [
              {
                id: 'q1',
                question: 'Which word is NOT a greeting?',
                options: [
                  'Hello',
                  'Hi',
                  'Welcome',
                  'Goodbye'
                ],
                correctAnswer: 3
              },
              {
                id: 'q2',
                question: 'Which is the correct response to "How are you?"',
                options: ['I\'m John', 'I\'m fine, thank you', 'I\'m at home', 'I\'m a teacher'],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: 'Which category does the word "apple" belong to?',
                options: ['Colors', 'Animals', 'Fruits', 'Jobs'],
                correctAnswer: 2
              }
            ]
          },
          {
            id: 'grammar-quiz',
            title: 'Basic Grammar Quiz',
            description: 'Test your understanding of fundamental English grammar',
            questions: [
              {
                id: 'q1',
                question: 'Which sentence is correct?',
                options: [
                  'She don\'t like coffee',
                  'She not like coffee',
                  'She doesn\'t likes coffee',
                  'She doesn\'t like coffee'
                ],
                correctAnswer: 3
              },
              {
                id: 'q2',
                question: 'Select the correct article: "I need ___ umbrella."',
                options: ['a', 'an', 'the', 'No article needed'],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: 'Which is the correct plural form of "child"?',
                options: ['childs', 'childes', 'childen', 'children'],
                correctAnswer: 3
              }
            ]
          },
          {
            id: 'practical-english-quiz',
            title: 'Practical English Quiz',
            description: 'Test your ability to use English in real-world situations',
            questions: [
              {
                id: 'q1',
                question: 'What would you say to order food in a restaurant?',
                options: [
                  'I want this',
                  'Give me that one',
                  'I would like the chicken salad, please',
                  'Chicken for me'
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: 'How do you ask for the price of something?',
                options: ['How cost?', 'How much is this?', 'What price?', 'Money?'],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: 'How do you ask for directions to the train station?',
                options: [
                  'Where is train?',
                  'Excuse me, where is the train station?',
                  'Train station where?',
                  'I need train'
                ],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: 'react-fundamentals',
        title: 'React Fundamentals',
        description: 'Master the basics of React and build modern single-page applications. Learn component-based architecture, state management, and how to integrate with APIs.',
        image: '/thumbnail-images/react-basics.jpg',
        category: 'Web Development',
        level: 'Intermediate',
        instructor: {
          name: 'Natoli Lemessa',
          role: 'Lead React Developer',
          bio: 'Former Meta engineer with 8+ years of experience building production React applications. Passionate about teaching best practices and helping developers level up their front-end skills.',
          avatar: '/api/placeholder/80/80',
          rating: 4.9,
          courseCount: 7
        },
        overview: {
          description: 'This intermediate course will teach you the core concepts of React, the most popular JavaScript library for building user interfaces. Through practical examples and real-world projects, you\'ll learn how to build efficient, scalable front-end applications using modern React development workflows. By the end of this course, you\'ll have built a complete single-page application from scratch.',
          learningOutcomes: [
            'Understanding React component architecture and lifecycle',
            'Working with functional components and React Hooks',
            'State management with Context API and Redux',
            'Routing with React Router',
            'Handling forms and user input in React',
            'Making API calls and handling asynchronous operations',
            'Testing React components with Jest and React Testing Library',
            'Optimizing performance in React applications',
            'Deploying React applications to production'
          ],
          requirements: [
            'Solid understanding of HTML, CSS, and JavaScript',
            'Familiarity with ES6+ syntax (arrow functions, destructuring, etc.)',
            'Basic understanding of npm and terminal/command line',
            'Text editor or IDE (VS Code recommended)',
            'Node.js installed on your computer'
          ],
          targetAudience: [
            'Front-end developers looking to learn React',
            'JavaScript developers wanting to expand their skillset',
            'Developers transitioning from other frameworks like Angular or Vue',
            'CS students preparing for front-end developer interviews',
            'Professionals working with legacy React codebases'
          ]
        },
        resources: {
          downloadables: [
            {
              title: 'React Project Starter Kit',
              description: 'Pre-configured project setup with all necessary dependencies',
              fileType: 'ZIP',
              fileSize: '8.2MB',
              icon: 'FaFileArchive'
            },
            {
              title: 'React Component Patterns Guide',
              description: 'In-depth guide to different component patterns and when to use them',
              fileType: 'PDF',
              fileSize: '3.6MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'React Hooks Cheat Sheet',
              description: 'Quick reference for all built-in hooks with usage examples',
              fileType: 'PDF',
              fileSize: '1.5MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'State Management Architecture Diagrams',
              description: 'Visual guides for implementing various state management solutions',
              fileType: 'PDF',
              fileSize: '4.2MB',
              icon: 'FaFilePdf'
            }
          ],
          externalResources: [
            {
              title: 'Official React Documentation',
              description: 'Comprehensive guide and API reference for React',
              url: 'https://www.youtube.com/watch?v=MuUZmmn1WQM'
            },
            {
              title: 'React DevTools Browser Extension',
              description: 'Essential tool for debugging React applications',
              url: 'https://react.dev/learn/react-developer-tools'
            },
            {
              title: 'Create React App Documentation',
              description: 'Learn all about the configuration and features of CRA',
              url: 'https://create-react-app.dev/'
            },
            {
              title: 'React Course GitHub Repository',
              description: 'Access all code examples and starter projects',
              url: 'https://github.com/platform/react-course'
            }
          ],
          recommendedBooks: [
            {
              title: 'React Explained',
              author: 'Zac Gordon',
              description: 'Comprehensive guide to React concepts with practical examples.'
            },
            {
              title: 'Learning React',
              author: 'Alex Banks & Eve Porcello',
              description: 'Modern patterns for developing React apps with hooks and functional components.'
            },
            {
              title: 'React Design Patterns and Best Practices',
              author: 'Michele Bertoli',
              description: 'Advanced techniques for building scalable React applications.'
            },
            {
              title: 'Testing React Applications with Jest',
              author: 'Jeff Vega',
              description: 'Learn to write comprehensive tests for your React components.'
            }
          ]
          
        },
        lessonVideos: [
            {
              lessonId: 'react-intro',
              title: 'Introduction to React',
              videoUrl: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM',
              duration: '40:15',
              description: 'Overview of React core concepts and component-based architecture'
            },
            {
              lessonId: 'components',
              title: 'React Components Deep Dive',
              videoUrl: 'https://www.youtube.com/watch?v=Cla1WwguArA',
              duration: '45:30',
              description: 'Learn about functional and class components in React'
            },
            {
              lessonId: 'state-props',
              title: 'State and Props in React',
              videoUrl: 'https://www.youtube.com/watch?v=4ORZ1GmjaMc',
              duration: '50:22',
              description: 'Understanding state management and props passing in React applications'
            },
            {
              lessonId: 'react-hooks',
              title: 'React Hooks Tutorial',
              videoUrl: 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
              duration: '55:15',
              description: 'Master the most important React hooks including useState and useEffect'
            },
            {
              lessonId: 'routing',
              title: 'Routing in React',
              videoUrl: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
              duration: '45:08',
              description: 'Implement client-side routing with React Router'
            }
          ],
        lessons: [
          {
            id: 'react-intro',
            title: 'Introduction to React',
            content: 'Overview of React, its features, and advantages. Learn the core concepts behind the component-based architecture.',
            duration: 40
          },
          {
            id: 'components',
            title: 'React Components',
            content: 'Learn about functional and class components. Understand the differences and when to use each type.',
            duration: 45
          },
          {
            id: 'state-props',
            title: 'State and Props',
            content: 'Understanding state management and props passing. Learn how data flows through React applications.',
            duration: 50
          },
          {
            id: 'react-hooks',
            title: 'React Hooks',
            content: 'Master the most important hooks including useState, useEffect, useContext, and creating custom hooks.',
            duration: 55
          },
          {
            id: 'routing',
            title: 'Routing in React',
            content: 'Implement client-side routing with React Router to create multi-page experiences.',
            duration: 45
          }
          
        ],
        quizzes: [
          {
            id: 'react-basics-quiz',
            title: 'React Basics Quiz',
            description: 'Test your knowledge of React fundamentals',
            questions: [
              {
                id: 'q1',
                question: 'What is JSX?',
                options: [
                  'A JavaScript library',
                  'A JavaScript XML syntax extension',
                  'A JavaScript framework',
                  'A JavaScript compiler'
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: 'Which of the following is used to pass data from parent to child component?',
                options: ['State', 'Props', 'Context', 'Redux'],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: 'What function is used to update state in React?',
                options: ['this.state()', 'this.setState()', 'this.updateState()', 'this.changeState()'],
                correctAnswer: 1
              }
            ]
          },
          {
            id: 'react-hooks-quiz',
            title: 'React Hooks Quiz',
            description: 'Test your knowledge of React Hooks',
            questions: [
              {
                id: 'q1',
                question: 'Which hook replaces componentDidMount lifecycle method?',
                options: ['useMount()', 'useEffect()', 'useLifecycle()', 'useState()'],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: 'Which hook is used for storing component state?',
                options: ['useContext()', 'useReducer()', 'useState()', 'useStore()'],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: 'What does the second argument to useEffect control?',
                options: [
                  'When the effect should run',
                  'Error handling for the effect',
                  'The cleanup function',
                  'The effect priority'
                ],
                correctAnswer: 0
              }
            ]
          }
          
        ],
        
      },
      {
        id: 'ap-world-ww2',
        title: 'AP World History: World War II',
        description: 'Master the essential history of World War II for your AP World History exam. Learn about the causes, major events, key figures, and global impact of the most devastating conflict in human history.',
        image: '/thumbnail-images/ww2-history.jpg',
        category: 'History',
        level: 'Advanced Placement',
        instructor: {
          name: 'Natoli Lemessa',
          role: 'Knowledge on World History',
          bio: '8+ years of experience in 20th century global conflicts.',
          avatar: '/api/placeholder/80/80',
          rating: 4.9,
          courseCount: 7
        },
        overview: {
          description: 'This comprehensive AP World History course focuses on World War II (1939-1945), examining its causes, major theaters of conflict, significant battles, key figures, and global aftermath. Through primary source analysis and historiographical debates, you\'ll develop a nuanced understanding of this pivotal global conflict and its long-lasting effects on international relations, economies, and societies. This course aligns with AP World History exam requirements and provides essential context for understanding the modern world order.',
          learningOutcomes: [
            'Understanding the causes of World War II, including the Treaty of Versailles and the Great Depression',
            'Analyzing the rise of fascism and militarism in Europe and Asia',
            'Examining major battles and military campaigns across different theaters',
            'Evaluating the role of technology and industrial capacity in modern warfare',
            'Understanding the Holocaust and other atrocities committed during the war',
            'Analyzing the home front experiences across different nations',
            'Examining the formation of the United Nations and postwar international order',
            'Understanding the origins of the Cold War and decolonization movements',
            'Developing skills in analyzing primary sources and historical interpretations'
          ],
          requirements: [
            'Basic understanding of early 20th century history (WWI and interwar period)',
            'Ability to read and analyze historical texts',
            'Access to required textbooks and course materials',
            'Interest in global historical perspectives',
            'Time commitment for reading primary and secondary sources'
          ],
          targetAudience: [
            'AP World History students preparing for exams',
            'High school students interested in 20th century history',
            'College students studying modern world history',
            'History enthusiasts seeking to deepen their understanding of WWII',
            'Anyone interested in the roots of our contemporary global order'
          ]
        },
        resources: {
          downloadables: [
            {
              title: 'World War II Timeline',
              description: 'Comprehensive timeline of key events from 1933-1945',
              fileType: 'PDF',
              fileSize: '8.2MB',
              icon: 'FaFileArchive'
            },
            {
              title: 'Primary Source Document Collection',
              description: 'Key speeches, treaties, and correspondence from the war period',
              fileType: 'PDF',
              fileSize: '3.6MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'World War II Maps Collection',
              description: 'Detailed maps of major battles and territorial changes',
              fileType: 'PDF',
              fileSize: '5.5MB',
              icon: 'FaFilePdf'
            },
            {
              title: 'AP World History Essay Templates',
              description: 'Structured templates for DBQ and LEQ responses on WWII topics',
              fileType: 'PDF',
              fileSize: '2.2MB',
              icon: 'FaFilePdf'
            }
          ],
          externalResources: [
            {
              title: 'United States Holocaust Memorial Museum',
              description: 'Comprehensive archive of Holocaust materials and educational resources',
              url: 'https://www.ushmm.org/'
            },
            {
              title: 'National WWII Museum Digital Collections',
              description: 'Primary sources, oral histories, and artifacts from WWII',
              url: 'https://www.nationalww2museum.org/collections'
            },
            {
              title: 'Yale University Avalon Project: WWII Documents',
              description: 'Collection of key diplomatic and legal documents',
              url: 'https://avalon.law.yale.edu/subject_menus/wwii.asp'
            },
            {
              title: 'AP World History Course and Exam Description',
              description: 'Official College Board materials for AP World History',
              url: 'https://apcentral.collegeboard.org/courses/ap-world-history'
            }
          ],
          recommendedBooks: [
            {
              title: 'The Second World War',
              author: 'Antony Beevor',
              description: 'Comprehensive single-volume history of the global conflict.'
            },
            {
              title: 'Bloodlands: Europe Between Hitler and Stalin',
              author: 'Timothy Snyder',
              description: 'Examination of mass killings in Eastern Europe under Nazi and Soviet regimes.'
            },
            {
              title: 'The Rise and Fall of the Third Reich',
              author: 'William L. Shirer',
              description: 'Classic account of Nazi Germany from its rise to its defeat.'
            },
            {
              title: 'Forgotten Ally: Chinas World War II',
              author: 'Rana Mitter',
              description: 'Detailed account of Chinas crucial but often overlooked role in WWII.'
            },
          ]
        },
        lessonVideos: [
          {
            lessonId: 'causes-ww2',
            title: 'Causes of World War II',
            videoUrl: 'https://www.youtube.com/watch?v=fo2Rb9h788s',
            duration: '42:15',
            description: 'Examination of the Treaty of Versailles, the Great Depression, and the rise of fascism'
          },
          {
            lessonId: 'european-theater',
            title: 'The European Theater of War',
            videoUrl: 'https://www.youtube.com/watch?v=WOVEy1tC7nk',
            duration: '48:30',
            description: 'Analysis of key battles from Blitzkrieg to D-Day and the fall of Berlin'
          },
          {
            lessonId: 'pacific-theater',
            title: 'The Pacific Theater of War',
            videoUrl: 'https://www.youtube.com/watch?v=9_TMuoVjEO0',
            duration: '45:22',
            description: 'Examination of Japanese expansion, major naval battles, and island-hopping campaigns'
          },
          {
            lessonId: 'holocaust',
            title: 'The Holocaust and War Crimes',
            videoUrl: 'https://www.youtube.com/watch?v=sJDsfOWLqO8',
            duration: '50:15',
            description: 'Analysis of the Holocaust, Japanese war crimes, and the development of international law'
          },
          {
            lessonId: 'aftermath',
            title: 'The Aftermath and Legacy',
            videoUrl: 'https://www.youtube.com/watch?v=9C72ISMF_D0',
            duration: '46:08',
            description: 'Examination of the postwar world order, Cold War origins, and decolonization'
          }
        ],
        lessons: [
          {
            id: 'causes-ww2',
            title: 'Causes of World War II',
            content: 'Examination of the long-term and immediate causes of the conflict, including the Treaty of Versailles, the Great Depression, appeasement policies, and the rise of totalitarian regimes.',
            duration: 42
          },
          {
            id: 'european-theater',
            title: 'The European Theater of War',
            content: 'Analysis of major campaigns and battles in Europe, including the Fall of France, Operation Barbarossa, the Eastern Front, North Africa, Italy, and the Western Front after D-Day.',
            duration: 48
          },
          {
            id: 'pacific-theater',
            title: 'The Pacific Theater of War',
            content: 'Examination of the war in Asia and the Pacific, including Japanese imperial expansion, Pearl Harbor, major naval battles, island-hopping campaigns, and the atomic bombings.',
            duration: 45
          },
          {
            id: 'holocaust',
            title: 'The Holocaust and War Crimes',
            content: 'Analysis of Nazi genocide policies, concentration and death camps, Japanese war crimes in Asia, and the development of the concept of crimes against humanity.',
            duration: 50
          },
          {
            id: 'aftermath',
            title: 'The Aftermath and Legacy',
            content: 'Examination of the immediate and long-term consequences of WWII, including the formation of the UN, Nuremberg Trials, Cold War divisions, and decolonization movements.',
            duration: 46
          }
        ],
        quizzes: [
          {
            id: 'ww2-causes-quiz',
            title: 'World War II Causes Quiz',
            description: 'Test your knowledge of the factors leading to World War II',
            questions: [
              {
                id: 'q1',
                question: 'Which treaty imposed harsh penalties on Germany after World War I?',
                options: [
                  'Treaty of Tordesillas',
                  'Treaty of Versailles',
                  'Treaty of Brest-Litovsk',
                  'Treaty of Westphalia'
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: 'Which policy attempted to avoid war by making concessions to Nazi Germany?',
                options: ['Containment', 'Appeasement', 'Détente', 'Brinkmanship'],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: 'Which event marked Germany\'s first major violation of the Treaty of Versailles?',
                options: [
                  'Invasion of Poland',
                  'Remilitarization of the Rhineland',
                  'Anschluss with Austria',
                  'Munich Agreement'
                ],
                correctAnswer: 1
              }
            ]
          },
          {
            id: 'ww2-battles-quiz',
            title: 'Major Battles Quiz',
            description: 'Test your knowledge of key World War II battles and campaigns',
            questions: [
              {
                id: 'q1',
                question: 'Which battle marked the turning point of the war in the Pacific?',
                options: ['Battle of Midway', 'Battle of Coral Sea', 'Battle of Leyte Gulf', 'Battle of Okinawa'],
                correctAnswer: 0
              },
              {
                id: 'q2',
                question: 'Which battle is considered the turning point on the Eastern Front?',
                options: ['Battle of Kursk', 'Battle of Moscow', 'Battle of Stalingrad', 'Battle of Berlin'],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: 'Operation Overlord refers to:',
                options: [
                  'The Allied invasion of Sicily',
                  'The D-Day landings in Normandy',
                  'The Allied bombing campaign against Germany',
                  'The Soviet offensive in Eastern Europe'
                ],
                correctAnswer: 1
              }
            ]
          },
          {
            id: 'ww2-aftermath-quiz',
            title: 'World War II Aftermath Quiz',
            description: 'Test your knowledge of the consequences and legacy of World War II',
            questions: [
              {
                id: 'q1',
                question: 'Which organization was founded in 1945 to prevent future world wars?',
                options: ['League of Nations', 'United Nations', 'NATO', 'European Union'],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: 'The Nuremberg Trials established the legal precedent for:',
                options: [
                  'National sovereignty',
                  'Crimes against humanity',
                  'Economic sanctions',
                  'International trade law'
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: 'The division of which country symbolized the beginning of the Cold War?',
                options: ['Korea', 'Vietnam', 'Germany', 'Japan'],
                correctAnswer: 2
              }
            ]
          }
        ]
      }
      
    ]
    
  };

  
  export default courseData;