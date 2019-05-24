const contents = {
  hero: {
    title: 'Lorem ipsum dolor sit amet.',
    body:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sequi eius facilis tempore voluptatem repellat! Eveniet molestias incidunt at dolores!',
    btn1_txt: 'START FOR FREE',
    btn1_link: 'https://reactjs.org',
    btn2_txt: 'READ DOCS',
    btn2_link: 'https://reactjs.org/docs/getting-started.html'
  },
  benefits: {
    items: [
      {
        title: 'Consectetur quisquam aliquid excepturi',
        body:
          'Nisi, ratione amet nemo nihil laudantium, iusto voluptatum eligendi dolores recusandae dignissimos impedit consequuntur aliquid!'
      },
      {
        title: 'Similique omnis sunt exercitationem sit',
        body:
          'Sed eius officia aliquid sit totam officiis esse illum corrupti harum consectetur dolorem quas voluptatum nihil, libero nonpossimus quae praesentium.'
      }
    ]
  },
  prices: {
    items: [
      {
        title: 'libero totam',
        price: '0.00',
        subtitle:
          'Vitae aut expedita autem illum quas amet similique deserunt inventore.',
        list: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum animi sit, ullam debitis ad error impedit ipsum nemo deserunt.',
          'Tenetur facilis incidunt magni eius mollitia autem dolor eveniet quisquam consequuntur libero totam eaque repellendus aliquam.'
        ]
      },
      {
        title: 'libero totam',
        price: '0.00',
        subtitle:
          'Vitae aut expedita autem illum quas amet similique deserunt inventore.',
        list: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum animi sit, ullam debitis ad error impedit ipsum nemo deserunt.',
          'Tenetur facilis incidunt magni eius mollitia autem dolor eveniet quisquam consequuntur libero totam eaque repellendus aliquam.'
        ]
      },
      {
        title: 'libero totam',
        price: '0.00',
        subtitle:
          'Vitae aut expedita autem illum quas amet similique deserunt inventore.',
        list: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum animi sit, ullam debitis ad error impedit ipsum nemo deserunt.',
          'Tenetur facilis incidunt magni eius mollitia autem dolor eveniet quisquam consequuntur libero totam eaque repellendus aliquam.'
        ]
      },
      {
        title: 'libero totam',
        price: '0.00',
        subtitle:
          'Vitae aut expedita autem illum quas amet similique deserunt inventore.',
        list: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum animi sit, ullam debitis ad error impedit ipsum nemo deserunt.',
          'Tenetur facilis incidunt magni eius mollitia autem dolor eveniet quisquam consequuntur libero totam eaque repellendus aliquam.'
        ]
      }
    ]
  },
  cta: {
    title: 'Ipsam minima consectetur facere.',
    body:
      'Molestias ex nobis non minima tempore blanditiis dolor molestiae harum dolores nihil, doloremque distinctio vel, eveniet quos corrupti quidem. Accusantium, placeat necessitatibus?',
    btn1_txt: 'START FOR FREE',
    btn1_link: 'https://reactjs.org',
    btn2_txt: 'READ DOCS',
    btn2_link: 'https://reactjs.org/docs/getting-started.html'
  }
};

export function getContentsData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(contents), 1000);
  });
}
