export default {
  widgets: [
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
                  buildHookId: '628cca7490f2a97dd8b3620d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8wwc6gm5',
                  apiId: 'e995a452-eecd-47e5-9a60-ee1bd8697434'
                },
                {
                  buildHookId: '628cca75646cda03f8a08e47',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mjuc7kda',
                  apiId: '472dd4e9-4cb2-479f-9cc2-0d05dca1c127'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/christopherdeanfinc3/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mjuc7kda.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
