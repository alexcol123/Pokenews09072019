const initState = {
  posts: [
    {
      id: '1',
      title: 'Post 1',
      body:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ratione cupiditate recusandae aut officia harum sint itaque, fugit rerum, ea provident illo nemo. Repudiandae, beatae. '
    },
    {
      id: '2',
      title: 'Post 2',
      body:
        'Consectetur adipisicing elit. Exercitationem ratione cupiditate recusandae aut officia harum sint itaque, fugit rerum, ea provident illo nemo. Repudiandae, beatae. '
    },
    {
      id: '3',
      title: 'Post 3',
      body:
        'Exercitationem ratione cupiditate recusandae aut officia harum sint itaque, fugit rerum, ea provident illo nemo. Repudiandae, beatae. '
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};
export default rootReducer;
