module.exports = {
  title: 'Cards',
  status: "wip",
  context: {
    card: {
      layout: ' ',
      url: '#',
      img:'https://placeimg.com/400/300/tech/grayscale',
      linkText: 'Link one',
      heading: 'Heading',
      copy: 'Copy here'
    }
  },
  variants: [
    {
      name: 'Text only',
      context: {
        card: {
          layout: 'text-only',
          url: '#',
          img:'https://placeimg.com/400/300/tech/grayscale',
          linkText: 'Link two',
          heading: 'Heading',
          copy: 'Copy here'
        }
      }
    },
    {
      name: 'Image only',
      context: {
        card: {
          layout: 'img-only',
          url: '#',
          img:'https://placeimg.com/533/300/tech/grayscale',
          linkText: 'Link three',
          heading: 'Heading',
          copy: 'Copy here'
        }
      }
    },
    {
      name: 'Text top',
      context: {
        card: {
          layout: 'text-top',
          url: '#',
          img:'https://placeimg.com/400/300/tech/grayscale',
          linkText: 'Link four',
          heading: 'Heading',
          copy: 'Copy here'
        }
      }
    },
    {
      name: 'Text left',
      context: {
        card: {
          layout: 'text-left',
          url: '#',
          img:'https://placeimg.com/400/300/tech/grayscale',
          linkText: 'Link two',
          heading: 'Heading',
          copy: 'Copy here'
        }
      }
    },
  ],
  collated: false
}
