'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  require('node-env-file')('.env');
  console.log('Running Development!');
}

require('mahrio')( process.env, __dirname ).then( function(server){

// ASSETS
  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: ['../public/assets/']
      }
    }
  });

// TEST SERVER SIDE PAGES
  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: function(req, rep){
      rep.view('index', {
        page: {
          title: 'Page Title',
          url: 'home',
          menus: [{
            content: {
              social: {
                github: "https://twitter.com/whichdegree",
                twitter: "https://twitter.com/whichdegree",
                pinterest: "https://twitter.com/whichdegree",
                linkedIn: "https://twitter.com/whichdegree",
                fb: "https://www.facebook.com/WhichDegree/"
              },
              accounts: true,
              address: null,
              mail: null,
              phone: null,
              search: false,
              newsletter: true,
              topics: [],
              links: [
                {
                  href: "#mission",
                  text: "Mission"
                },
                {
                  href: "#articles",
                  text: "Articles"
                },
                {
                  href: "#contact",
                  text: "Contact"
                },
                {
                  href: "#team",
                  text: "Team"
                }
              ],
              brand: "Which Degree"
            }
          }],
          sections: [{
            content: {
              sections: [
                {
                  buttons: [
                    {
                      img: "http://im.com/Content/images/appStore_apple.png",
                      text: ""
                    },
                    {
                      img: "http://im.com/Content/images/appStore_google.png",
                      text: ""
                    }
                  ],
                  p: "Let us provide you educational intelligence, virtual job shadowing & direct networking to domain-experts.",
                  h2: "HIGHER EDUCATION INSIGHTS",
                  overlay: "rgba(0,0,0,.8)",
                  col: "cd-full-width",
                  icon: "fa-graduation-cap",
                  name: "DEGREES",
                  bg: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Slider1.jpg"
                },
                {
                  buttons: [
                    {
                      text: "CHECK US OUT"
                    }
                  ],
                  p: "We are sourcing business & financial networks, along with computer technology, to cultivate a community.\n\nCHECK US OUT",
                  h2: "GROW YOUR CONNECTIONS",
                  overlay: "rgba(0,0,0,.4)",
                  col: "cd-full-width",
                  icon: "fa-cloud",
                  name: "NETWORKS",
                  bg: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Slider2.jpg"
                },
                {
                  buttons: [
                    {
                      text: "READ MORE"
                    }
                  ],
                  p: "You can depend on us to provide expert, unopinionated, content. We are obsessive researchers.",
                  h2: "DISCOVERY",
                  bg: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Slider3.jpg",
                  col: "cd-half-width",
                  icon: "fa-book",
                  name: "ARTICLES"
                },
                {
                  overlay: "rgba(0,0,0,.8)",
                  bg: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Slider4.jpg",
                  buttons: [
                    {
                      text: "READ MORE"
                    }
                  ],
                  p: "Learn about local and regional gatherings.",
                  h2: "GET INVOLVED",
                  col: "cd-full-width",
                  icon: "fa-calendar",
                  name: "EVENTS"
                },
                {
                  buttons: [
                    {
                      text: "READ MORE"
                    }
                  ],
                  p: "Connect to domain-experts who work in a wide variety of industries.",
                  h2: "CONVERSATIONS",
                  overlay: "rgba(0,0,0,.1)",
                  bg: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Slider5.png",
                  col: "cd-full-width",
                  icon: "fa-comments",
                  name: "CHATS"
                }
              ]
            },
            key: "heading-main"
          },{
            content: {
              sections: [
                {
                  img: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Feature1.jpg",
                  blurb: "Benevolence doesn't usually translate to wealth, therefore you need to question where the education dollar is spent. More and more graduates are faced with years of paying staggering monthly payments, and many are starting to ask themselves, \"Is it worth it?\"",
                  headingMuted: "How much debt to incur?",
                  heading: "Financial Planning:"
                },
                {
                  img: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Feature2.jpg",
                  blurb: "Jobs that require a particularly high level of task flexibility, or creativity, or empathy may continue to employ people (for a while). Yet most office jobs will eventually be replaced by software automation. The world is always changing and technology is constantly making our lives easier. But with this great technology comes great job loss. (Ouch.)",
                  headingMuted: "Will they follow the Dodo?",
                  heading: "Job Prospectives:"
                },
                {
                  img: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Feature3.jpg",
                  headingMuted: "Find what's learned",
                  blurb: "If you have any interest in mathematics, engineering, or the hard sciences, now is the time to explore it. Many subjects you can study in college \u2014 like history, literature, languages, business, law, or art \u2014 are also subjects you could learn later, through personal or professional experience, or through independent reading. Start working through difficult problems. If you don't tackle them now, the odds are strongly against you ever doing so in the future. We engineered the Which Degree product, and we'd like to share that with you.",
                  heading: "Been there, done that!"
                }
              ]
            },
            key: "feature-main"
          },{
            content: {
              highlight: {
                subHeading: "Which Degree's purpose is to organize educational data and develop insights on the value of education for students, teachers, institutions, and policy makers.",
                heading: "DEGREE ANALYSIS FOR STUDENTS",
                content: [
                  {
                    description: "Should you finance a career, a business, or both?",
                    title: "MONEY",
                    icon: "fa fa-money fa-4x"
                  },
                  {
                    description: "Understand the financial markets, job sectors, and disruption taking place with computer technology.",
                    title: "KNOWLEDGE",
                    icon: "fa fa-area-chart fa-4x"
                  },
                  {
                    title: "PROTECTION",
                    description: "Have the peace of mind and confidence your long-term goals with resist the test of time.",
                    icon: "fa fa-shield fa-4x"
                  },
                  {
                    description: "There's already a lot that can be done, let's get started!",
                    title: "BLAST-OFF",
                    icon: "fa fa-shield fa-4x"
                  }
                ]
              }
            },
            key: "highlight-main"
          }, {
            content: {
              statement: "To be your most trusted ally in your pursuit of higher education.",
              subHeading: "The fundamental purpose of our work",
              heading: "Our Mission",
              bg: "https://mahrio-whichdegree.s3.amazonaws.com/media/56633c2d18a8db0300d40d65/media/Slider1.jpg"
            },
            key: "mission-main"
          },{
            content: {
              subHeading: "Here's what the talk is all about.",
              heading: "Latest Articles",
              content: [
                {
                  published: "December 19, 2015",
                  writer: "Erik Peterson",
                  link: "/article/cheat-sheet-for-applying-to-herseys-data-science-team",
                  deck: "Bloomberg created a series of cheat sheets for applying to Hersheys and a ton of other firms",
                  title: "CHEAT SHEET FOR APPLYING TO HERSHEYS DATA SCIENCE TEAM"
                },
                {
                  published: "December 20, 2015",
                  writer: "Erik Peterson",
                  link: "/article/top-investment-bank-goldman-sachs-release-their-top-charts-for-the-upcoming-year",
                  deck: "For finance majors, you likely have heard of Goldman Sachs. This famous Investment Bank recently went public in 1999, and I say recent because it's been around since 1869.",
                  title: "TOP INVESTMENT BANK GOLDMAN SACHS RELEASE THEIR TOP CHARTS FOR THE COMING YEAR"
                },
                {
                  published: "December 21, 2015",
                  writer: "Jesus Guerrero",
                  link: "/article/The_internet_of_things",
                  deck: "While everyone is already deeply rooted with social media as the best way to communicate with real people, we begin to wonder... 'are we ready to conversate with machines?'",
                  title: "THE INTERNET OF THINGS"
                }
              ]
            },
            key: "article-main"
          },{
            content: {
              subHeading: "Please tell us about your next career goals and we will let you know what we can do to help you.",
              heading: "CONTACT US"
            },
            key: "contact-main"
          },{
            content: {
              heading: "Meet Our Team",
              members: [
                {
                  details: "Investor and entrepreneur with a successful history of founding innovative companies and building remarkable shareholder value",
                  role: "Co-founder / CEO",
                  name: "Erik Peterson",
                  img: "https://mahrio-whichdegree.s3.amazonaws.com/users/56633c2d18a8db0300d40d65/profile/jesus-profile.jpg"
                },
                {
                  details: "Engineering and product management leader, from concept to delivery and customer experience management. Expertise in building enterprise/mobile applications and web scale systems. Deep interest in user experience and usability. Responsible for WhichDegree's product portfolio, defining feature roadmap and managing implementation, enabling end-users to easily onboard with their mobile devices.",
                  role: "Co-founder / CTO",
                  name: "Jesus Rocha",
                  img: "https://mahrio-whichdegree.s3.amazonaws.com/users/56633c2d18a8db0300d40d65/profile/jesus-profile.jpg"
                }
              ]
            },
            key: "team-main"
          },{
            content: "<div class=\"banner\">\n      <div class=\"container\">\n        <div class=\"row social-media-list\">\n          <div class=\"col-lg-6\">\n            <h2>  Connect with us.<\/h2>\n          <\/div>\n          <div class=\"col-lg-6\">\n            <ul class=\"list-inline banner-social-buttons\">\n              <li><a href=\"https://twitter.com/whichdegree\" target=\"_blank\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-twitter fa-fw\"><\/i><span class=\"network-name\">TWITTER<\/span><\/a><\/li>\n              <li><a href=\"https://www.facebook.com/WhichDegree/\" target=\"_blank\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-facebook fa-fw\"><\/i><span class=\"network-name\">FACEBOOK<\/span><\/a><\/li>\n              <li><a href=\"https://github.com/WhichDegree\" target=\"_blank\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-github fa-fw\"><\/i><span class=\"network-name\">GITHUB<\/span><\/a><\/li>\n            <\/ul>\n          <\/div>\n        <\/div>\n      <\/div>\n    <\/div>",
            key: "custom-main-links"
          }]
        }
      });
    }
  })
});
