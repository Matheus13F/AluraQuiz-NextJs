import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import db from "../db.json";
import { motion } from "framer-motion";

import Widget from "../src/components/Widget";
import Link from "../src/components/link";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import QuizContainer from "../src/components/QuizContainer";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const myTitle = db.title;
  const myDescription = db.description;
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{myTitle}</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          transition={{ delay: 0, duration: 0.5 }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{myTitle}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{myDescription}</p>

            <form onSubmit={(e) => handleSubmit(e)}>
              <Input
                name="nomeDoUsuario"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Jogar como: ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace(".vercel.app", "")
                  .split(".");
                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/matheus13f" />
    </QuizBackground>
  );
}
