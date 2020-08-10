import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Notícias', url: '/noticias' },
  { title: 'Posts', url: '' },
  { title: 'Portifólio', url: '/portifolio' },

];

const mainFeaturedPost = {
  title: 'Título da postagem',
  description:
    'Várias linhas de texto que formam o lede, informando novos leitores de maneira rápida e eficiente sobre o que há de mais interessante no conteúdo deste post.',
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue lendo…',
};

const featuredPosts = [
  {
    title: 'Postagem em destaque',
    date: 'Nov 12',
    description:
      'Este é um cartão mais amplo, com o texto de suporte abaixo como uma entrada natural para conteúdo adicional.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Título da postagem',
    date: 'Nov 11',
    description:
      'Este é um cartão mais amplo, com o texto de suporte abaixo como uma entrada natural para conteúdo adicional.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Sobre',
  description:
    'Plataforma onde os canditados a cargos eletivos podem se aproximar mais dos seus eleitores.',
  archives: [
    { title: 'Março 2020', url: '#' },
    { title: 'Fevereiro 2020', url: '#' },
    { title: 'Janeiro 2020', url: '#' },
    { title: 'Novembro 1999', url: '#' },
    { title: 'Outubro 1999', url: '#' },
    { title: 'Setembro 1999', url: '#' },
    { title: 'Agosto 1999', url: '#' },
    { title: 'Julho 1999', url: '#' },
    { title: 'Junho 1999', url: '#' },
    { title: 'Maio 1999', url: '#' },
    { title: 'Abril 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/arthurpss/politico-legal-frontend' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/politico_legal' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/Politico-Legal-102645471465398' },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Político Legal" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Criado por" description="Arthur Passos, Carlos Alexandre, Murilo Kronbauer e Rafael Guido" />
    </div>
  );
}
