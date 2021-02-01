import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/quiz'

export default function QuizDaGaleraPage({ dbExterno }) {
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen 
                externalQuestions={dbExterno.questions}
                externalBg={dbExterno.bg} 
            />        
        </ThemeProvider>
    );
}

export async function getServerSideProps(context) {
    const [projectName, githubUser] = context.query.id.split('___');
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((response) => {
        if(response.ok) {
            return response.json();
        }

        throw new Error('Falha ao se conectar com o servidor');
        
    }).catch(err => alert(err))

    return {
        props: {
            dbExterno,
        }, //will be passed to the page component as props
    };
}