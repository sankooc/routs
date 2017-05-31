module.exports = {
  path: '/',
  routes: [
    {
      path: '/',
      match: 'hello',
    },
    {
      path: '/user',
      routes: [
        {
          path: '/:name',
          match: 'print',
          filters: ['success'],
        },
      ],
      filters: ['auth'],
    },
    // suffix 
    {
      path: '/excel',
      match: 'print',
      ext: 'excel',
    },
  ],
};