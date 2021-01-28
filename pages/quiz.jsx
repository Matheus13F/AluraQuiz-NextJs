import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/Container';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Got Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Questão 1 de 10</h1>

          </Widget.Header>
          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            src="https://placehold.it/400x400"
          />
          <Widget.Content>
              <h2>Titulo</h2>
              <p>Descrição</p>
              <Button type="submit" >
                Confirmar
              </Button>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/matheus13f" />
    </QuizBackground>
  );
}
