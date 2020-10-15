export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f88c938604b3c264929fe12',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cmyo6rzi',
                  apiId: 'ac15a8bd-a7a9-4fed-b638-52c59fb4965c'
                },
                {
                  buildHookId: '5f88c938e358653025f0212f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jofbtth1',
                  apiId: '325b9152-a96c-4d31-9ed9-685b532b593c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryan3738/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jofbtth1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
