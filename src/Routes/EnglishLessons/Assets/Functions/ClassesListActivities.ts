export const lessons = [
  ///////////Basic
  {
    title: "Introducing Yourself / Basics",
    order: 1,
    type: "Basic",
    description:
      "Nesta aula, aprenderemos algumas expressões básicas, e maneiras comuns de se apresentar.",
    image:
      "https://images.pexels.com/photos/5668834/pexels-photo-5668834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    elements: [
      {
        subtitle: "Sentences 1",
        comments: "Lorem Ipsun",
        order: 0,
        type: "sentences",
        sentences: [
          { english: "Hello!", portuguese: "Olá!" },
          { english: "Hi", portuguese: "Oi" },
          { english: "How are you?", portuguese: "Como você está?" },
          { english: "I’m fine", portuguese: "Estou bem" },
          { english: "I’m good", portuguese: "Estou bem" },
          { english: "I’m doing well.", portuguese: "Estou indo bem" },
          { english: "Good morning!", portuguese: "Bom dia!" },
          { english: "Good afternoon!", portuguese: "Boa tarde!" },
          { english: "Good evening!", portuguese: "Boa noite!" },
          { english: "Good night!", portuguese: "Boa noite!" },
          { english: "Nice to meet you!", portuguese: "Prazer em conhecê-lo!" },
          { english: "Thank you", portuguese: "Obrigado (a)" },
          { english: "Please", portuguese: "Por favor." },
          { english: "Goodbye", portuguese: "Tchau." },
          { english: "What’s your name?", portuguese: "Qual é o seu nome?" },
          { english: "Where are you from?", portuguese: "De onde você é?" },
          { english: "I don't understand.", portuguese: "Eu não entendo." },
          { english: "Can you help me?", portuguese: "Você pode me ajudar?" },
          { english: "I'm sorry", portuguese: "Desculpe-me" },
          { english: "How old are you?", portuguese: "Quantos anos você tem?" },
          { english: "Excuse me.", portuguese: "Com licença." },
        ],
      },
      {
        subtitle: "Dialogue Practice #1",
        order: 1,
        type: "dialogue",
        dialogue: [
          "What is your name?",
          "My name is John. What is your name?",
          "My name is Mary. How old are you?",
          "I am twenty years old. How old are you?",
          "I am nineteen. Where are you from?",
          "I am from Canada. Where are you from?",
          "I am from Australia.",
          "Is it nice there?",
          "Yes, it is. It is very beautiful.",
        ],
      },
    ],
  },
  {
    title: "The Alphabet / Spelling",
    order: 2,
    type: "Basic",
    description: "Nesta aula, você aprende as letras do alfabeto e a soletrar.",
    image:
      "https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=600",
    elements: [
      {
        // subtitle: "",
        comments:
          "Veja abaixo as letras do alfabeto em inglês e suas respectivas pronúncias",
        order: 0,
        type: "sentences",
        sentences: [
          { english: "A", portuguese: "êi" },
          { english: "B", portuguese: "bí" },
          { english: "C", portuguese: "cí" },
          { english: "D", portuguese: "dí" },
          { english: "E", portuguese: "í" },
          { english: "F", portuguese: "éf" },
          { english: "G", portuguese: "djí" },
          { english: "H", portuguese: "êitch" },
          { english: "I", portuguese: "ái" },
          { english: "J", portuguese: "djêi" },
          { english: "K", portuguese: "quêi" },
          { english: "L", portuguese: "éll" },
          { english: "M", portuguese: "êmm" },
          { english: "N", portuguese: "ênn" },
          { english: "O", portuguese: "ou" },
          { english: "P", portuguese: "pí" },
          { english: "Q", portuguese: "quiú" },
          { english: "R", portuguese: "ár" },
          { english: "S", portuguese: "éss" },
          { english: "T", portuguese: "tí" },
          { english: "U", portuguese: "iú" },
          { english: "V", portuguese: "ví" },
          { english: "W", portuguese: "dãboul-iú" },
          { english: "X", portuguese: "écss" },
          { english: "Y", portuguese: "uái" },
          { english: "Z", portuguese: "zí" },
        ],
      },
      {
        subtitle: "Extra Information!!",
        image:
          "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",

        order: 1,
        type: "multipletexts",
        subtexts: [
          {
            subtexttitle: "Two equal letters!",
            text: "In English, when two letters appear consecutively in a word, we often use the word 'double' before the letter. (Double S, Double T, Double L, Double O, etc)",
          },
          {
            subtexttitle: "Don't say 'to write' for spelling",
            text: "In English, unlike in Portuguese, when we ask about the process of forming words letter by letter, we use the term 'spell' instead of 'write.' ",
          },
        ],
      },
      {
        subtitle: "How do you spell... ?",
        comments:
          "Em inglês, quando queremos perguntar como se escreve/soletra uma palavra, perguntamos 'How do you spell...?' e completamos com a palavra em questão!",
        order: 2,
        type: "exercise",
        items: [
          "How do you spell your name?",
          "How do you spell your mother’s last name?",
          "How do you spell your mother’s first name?",
          "How do you spell your best friend’s last name?",
          "How do you spell your best friend’s last name?",
          "How do you spell your favorite book’s name?",
          "How do you spell 'International'?",
          "How do you spell 'Seventy'?",
          "How do you spell 'Tonight'?",
        ],
      },
    ],
  },
  {
    title: "Personal Pronouns",
    order: 3,
    type: "Basic",
    description:
      "Os pronomes pessoais em inglês são fundamentais para construir frases. Eles se dividem em 'subject pronouns' e 'object pronouns'.",
    image:
      "https://images.pexels.com/photos/4629623/pexels-photo-4629623.jpeg?auto=compress&cs=tinysrgb&w=600",
    elements: [
      {
        subtitle: "Subject Pronouns",
        comments: "Esses pronomes são usados como sujeito da frase.",
        order: 0,
        type: "sentences",
        sentences: [
          { english: "I", portuguese: "Eu" },
          { english: "You", portuguese: "Você" },
          { english: "He", portuguese: "Ele" },
          { english: "She", portuguese: "Ela" },
          { english: "It", portuguese: "Ele/Ela (neutro)" },
          { english: "We", portuguese: "Nós" },
          { english: "They", portuguese: "Eles/Elas" },
        ],
      },
      {
        subtitle: "Object Pronouns",
        comments: "Esses pronomes são usados como objeto da frase.",
        order: 1,
        type: "sentences",
        sentences: [
          { english: "Me", portuguese: "Me/Mim" },
          { english: "You", portuguese: "Te/Você" },
          { english: "Him", portuguese: "Lhe/Ele" },
          { english: "Her", portuguese: "Lhe/Ela" },
          { english: "It", portuguese: "Lhe/Ele/Ela (neutro)" },
          { english: "Us", portuguese: "Nos/Nós" },
          { english: "Them", portuguese: "Lhes/Eles/Elas" },
        ],
      },
      {
        subtitle: "Practice Vocabulary",
        comments: "Vocabulário adicional para prática.",
        order: 2,
        type: "sentences",
        sentences: [
          { english: "Friend", portuguese: "Amigo(a)" },
          { english: "Gift", portuguese: "Presente" },
          { english: "Secret", portuguese: "Segredo" },
          { english: "Party", portuguese: "Festa" },
          { english: "Happy", portuguese: "Feliz" },
          { english: "But", portuguese: "Mas" },
          { english: "With", portuguese: "Com" },
          { english: "And", portuguese: "E" },
          { english: "Too", portuguese: "Também" },
        ],
      },
      {
        subtitle: "Examples in Sentences",
        comments: "Veja como os pronomes pessoais são usados em frases.",
        order: 3,
        type: "sentences",
        sentences: [
          { english: "I love you.", portuguese: "Eu te amo." },
          { english: "He is my friend.", portuguese: "Ele é meu amigo." },
          {
            english: "She gave me a gift.",
            portuguese: "Ela me deu um presente.",
          },
          { english: "We are happy.", portuguese: "Nós estamos felizes." },
          { english: "They will help us.", portuguese: "Eles vão nos ajudar." },
          { english: "Can you see it?", portuguese: "Você pode ver isso?" },
          { english: "She likes him.", portuguese: "Ela gosta dele." },
          { english: "I called them.", portuguese: "Eu liguei para eles." },
          {
            english: "He told her a secret.",
            portuguese: "Ele contou um segredo para ela.",
          },
          {
            english: "They invited us to the party.",
            portuguese: "Eles nos convidaram para a festa.",
          },
        ],
      },
    ],
  },
  {
    title: "Articles",
    order: 4,
    type: "Basic",
    description: "Os artigos em inglês são 'A', 'An' e 'The'.",
    // image:
    //   "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/tobe..png?updatedAt=1716236209531",
    elements: [
      {
        subtitle: "A/An",
        comments:
          "Estes são os artigos indefinidos, ou seja, 'um' ou 'uma'. Você usa 'a' para palavras que antecedem consoantes, e 'an' para palavras que antecedem vogais.",
        order: 0,
        type: "sentences",
        sentences: [
          { english: "a doctor", portuguese: "um médico / uma médica" },
          {
            english: "an engineer",
            portuguese: "um engenheiro / uma engenheira",
          },
          { english: "a lawyer", portuguese: "um advogado / uma advogada" },
          { english: "a teacher", portuguese: "um professor / uma professora" },
          { english: "a nurse", portuguese: "um enfermeiro / uma enfermeira" },
          { english: "a pilot", portuguese: "um piloto / uma pilota" },
          { english: "an artist", portuguese: "um artista / uma artista" },
          { english: "a musician", portuguese: "um músico / uma música" },
          { english: "an actor", portuguese: "um ator / uma atriz" },
          { english: "a writer", portuguese: "um escritor / uma escritora" },
          {
            english: "a scientist",
            portuguese: "um cientista / uma cientista",
          },
          { english: "a dentist", portuguese: "um dentista / uma dentista" },
          {
            english: "a veterinarian",
            portuguese: "um veterinário / uma veterinária",
          },
          {
            english: "a journalist",
            portuguese: "um jornalista / uma jornalista",
          },
          {
            english: "a photographer",
            portuguese: "um fotógrafo / uma fotógrafa",
          },
          { english: "a chef", portuguese: "um chef / uma chef" },
          {
            english: "a firefighter",
            portuguese: "um bombeiro / uma bombeira",
          },
          {
            english: "a police officer",
            portuguese: "um policial / uma policial",
          },
          {
            english: "a accountant",
            portuguese: "um contador / uma contadora",
          },
          { english: "a waiter", portuguese: "um garçom / uma garçonete" },
          { english: "a house", portuguese: "uma casa" },
          { english: "a car", portuguese: "um carro" },
          { english: "a dog", portuguese: "um cachorro" },
          { english: "a cat", portuguese: "um gato" },
          { english: "a book", portuguese: "um livro" },
          { english: "a table", portuguese: "uma mesa" },
          { english: "a chair", portuguese: "uma cadeira" },
          { english: "an apple", portuguese: "uma maçã" },
          { english: "an orange", portuguese: "uma laranja" },
          { english: "an umbrella", portuguese: "um guarda-chuva" },
          { english: "an elephant", portuguese: "um elefante" },
          { english: "an airplane", portuguese: "um avião" },
          { english: "an egg", portuguese: "um ovo" },
          { english: "an island", portuguese: "uma ilha" },
          { english: "an hour", portuguese: "uma hora" },
          { english: "a pencil", portuguese: "um lápis" },
          { english: "a computer", portuguese: "um computador" },
          { english: "a phone", portuguese: "um telefone" },
          { english: "a tree", portuguese: "uma árvore" },
          { english: "a flower", portuguese: "uma flor" },
          { english: "a window", portuguese: "uma janela" },
          { english: "a bag", portuguese: "uma bolsa" },
          { english: "a shirt", portuguese: "uma camisa" },
          { english: "a hat", portuguese: "um chapéu" },
          { english: "a bike", portuguese: "uma bicicleta" },
          { english: "a spoon", portuguese: "uma colher" },
          { english: "a fork", portuguese: "um garfo" },
          { english: "a knife", portuguese: "uma faca" },
          { english: "a door", portuguese: "uma porta" },
          { english: "a key", portuguese: "uma chave" },
          { english: "a watch", portuguese: "um relógio" },
          { english: "a coin", portuguese: "uma moeda" },
          { english: "a cup", portuguese: "uma xícara" },
          { english: "an actor", portuguese: "um ator" },
          { english: "an actress", portuguese: "uma atriz" },
          { english: "an ant", portuguese: "uma formiga" },
          { english: "an owl", portuguese: "uma coruja" },
          { english: "an octopus", portuguese: "um polvo" },
          { english: "an apple", portuguese: "uma maçã" },
          { english: "an orange", portuguese: "uma laranja" },
          { english: "an onion", portuguese: "uma cebola" },
          { english: "an ice cream", portuguese: "um sorvete" },
          { english: "an idea", portuguese: "uma ideia" },
          { english: "an igloo", portuguese: "um iglu" },
          { english: "an island", portuguese: "uma ilha" },
          { english: "an oven", portuguese: "um forno" },
          { english: "an umbrella", portuguese: "um guarda-chuva" },
          { english: "an egg", portuguese: "um ovo" },
          { english: "an ear", portuguese: "uma orelha" },
          { english: "an eye", portuguese: "um olho" },
          { english: "an envelope", portuguese: "um envelope" },
          { english: "an earphone", portuguese: "um fone de ouvido" },
        ],
      },
      {
        subtitle: "The",
        comments: "Este é o artigo indefinido, ou seja, 'o / a / os / as'.",
        order: 1,
        type: "sentences",
        sentences: [
          { english: "the doctor", portuguese: "o médico / a médica" },
          { english: "the nurse", portuguese: "o enfermeiro / a enfermeira" },
          { english: "the teacher", portuguese: "o professor / a professora" },
          {
            english: "the engineer",
            portuguese: "o engenheiro / a engenheira",
          },
          { english: "the architect", portuguese: "o arquiteto / a arquiteta" },
          { english: "the lawyer", portuguese: "o advogado / a advogada" },
          { english: "the accountant", portuguese: "o contador / a contadora" },
          { english: "the chef", portuguese: "o chef / a chef" },
          { english: "the waiter", portuguese: "o garçom / a garçonete" },
          { english: "the pilot", portuguese: "o piloto / a pilota" },
          { english: "the firefighter", portuguese: "o bombeiro / a bombeira" },
          {
            english: "the police officer",
            portuguese: "o policial / a policial",
          },
          { english: "the artist", portuguese: "o artista / a artista" },
          { english: "the musician", portuguese: "o músico / a música" },
          { english: "the actor", portuguese: "o ator / a atriz" },
          { english: "the writer", portuguese: "o escritor / a escritora" },
          { english: "the scientist", portuguese: "o cientista / a cientista" },
          { english: "the dentist", portuguese: "o dentista / a dentista" },
          {
            english: "the veterinarian",
            portuguese: "o veterinário / a veterinária",
          },
          {
            english: "the journalist",
            portuguese: "o jornalista / a jornalista",
          },
          {
            english: "the photographer",
            portuguese: "o fotógrafo / a fotógrafa",
          },
          { english: "the sun", portuguese: "o sol" },
          { english: "the moon", portuguese: "a lua" },
          { english: "the stars", portuguese: "as estrelas" },
          { english: "the sky", portuguese: "o céu" },
          { english: "the ocean", portuguese: "o oceano" },
          { english: "the beach", portuguese: "a praia" },
          { english: "the mountain", portuguese: "a montanha" },
          { english: "the forest", portuguese: "a floresta" },
          { english: "the river", portuguese: "o rio" },
          { english: "the lake", portuguese: "o lago" },
          { english: "the tree", portuguese: "a árvore" },
          { english: "the flower", portuguese: "a flor" },
          { english: "the garden", portuguese: "o jardim" },
          { english: "the houses", portuguese: "as casas" },
          { english: "the cars", portuguese: "os carros" },
          { english: "the school", portuguese: "a escola" },
          { english: "the teacher", portuguese: "o professor / a professora" },
          { english: "the students", portuguese: "os alunos / as alunas" },
          { english: "the book", portuguese: "o livro" },
          { english: "the pen", portuguese: "a caneta" },
          { english: "the papers", portuguese: "os papers" },
          { english: "the computer", portuguese: "o computador" },
          { english: "the phone", portuguese: "o telefone" },
          { english: "the table", portuguese: "a mesa" },
          { english: "the chair", portuguese: "a cadeira" },
          { english: "the beds", portuguese: "as camas" },
          { english: "the door", portuguese: "a porta" },
          { english: "the window", portuguese: "a janela" },
          { english: "the keys", portuguese: "as chaves" },
          { english: "the clock", portuguese: "o relógio" },
          { english: "the TV", portuguese: "a televisão" },
          { english: "the radio", portuguese: "o rádio" },
          { english: "the music", portuguese: "a música" },
          { english: "the movie", portuguese: "o filme" },
          { english: "the theater", portuguese: "o teatro" },
          { english: "the restaurant", portuguese: "o restaurante" },
          { english: "the cafe", portuguese: "o café" },
          { english: "the store", portuguese: "a loja" },
          { english: "the market", portuguese: "o mercado" },
          { english: "the park", portuguese: "o parque" },
          { english: "the zoo", portuguese: "o zoológico" },
        ],
      },
      {
        subtitle: "Vocabulary",
        comments: "Vocabulário para praticar",
        order: 1,
        type: "sentences",
        sentences: [
          {
            english: "Here",
            portuguese: "Aqui",
          },
          {
            english: "There",
            portuguese: "Lá / Aí",
          },
          {
            english: "Friend",
            portuguese: "Amigo (a)",
          },
          {
            english: "Enemy",
            portuguese: "Inimigo (a)",
          },
          {
            english: "Happy",
            portuguese: "Feliz",
          },
          {
            english: "Sad",
            portuguese: "Triste",
          },
        ],
      },
      {
        subtitle: "Examples in Sentences",
        comments: "Veja algumas frases abaixo que usam o verbo 'To be'",
        order: 1,
        image:
          "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/business.jpg?updatedAt=1697220823801",
        type: "sentences",
        sentences: [
          { english: "I am a student.", portuguese: "Eu sou um estudante." },
          { english: "You are my friend.", portuguese: "Você é meu amigo." },
          { english: "She is a teacher.", portuguese: "Ela é uma professora." },
          {
            english: "We are going to the park.",
            portuguese: "Estamos indo para o Parque.",
          },
          {
            english: "They are studying for the exam.",
            portuguese: "Eles estão estudando para o exame.",
          },
          {
            english: "Am I late for the meeting?",
            portuguese: "Estou atrasado para a reunião?",
          },
          {
            english: "Are you coming to the party?",
            portuguese: "Você está vindo para a festa?",
          },
          { english: "Is he your brother?", portuguese: "Ele é seu irmão?" },
          {
            english: "Are we going to the movies tonight?",
            portuguese: "Vamos ao cinema hoje à noite?",
          },
          {
            english: "Are they from France?",
            portuguese: "Eles são da França?",
          },
          {
            english: "Mark is not a nice person.",
            portuguese: "Mark não é uma pessoa legal.",
          },
          {
            english: "We are not on vacation.",
            portuguese: "Não estamos de férias.",
          },
          {
            english: "They aren’t aware of the changes.",
            portuguese: "Eles não estão cientes das mudanças.",
          },
          {
            english: "I am not interested in that!",
            portuguese: "Eu não estou interessado nisso!",
          },
          {
            english: "You aren't allowed to enter.",
            portuguese: "Você não tem permissão para entrar.",
          },
          {
            english: "She isn't my friend.",
            portuguese: "Ela não é minha amiga.",
          },
        ],
      },
    ],
  },
  {
    title: "To be - Present tense",
    order: 5,
    type: "Basic",
    description:
      "O 'to be' é o principal verbo do inglês. Um verbo é uma ação, e este significa 'ser' ou 'estar'.",
    image:
      "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/tobe..png?updatedAt=1716236209531",
    elements: [
      {
        subtitle: "Affirmative Conjugations!",
        comments:
          "É assim que você conjuga 'ser' ou 'estar' em inglês, se estiver afirmando!",
        order: 0,
        type: "sentences",
        sentences: [
          { english: "I am", portuguese: "Eu sou / Eu estou" },
          { english: "You are", portuguese: "Você é / Você está" },
          { english: "He is", portuguese: "Ele é / Ele está" },
          { english: "She is", portuguese: "Ela é / Ela está" },
          { english: "It is", portuguese: "Ele/Ela é / Está" },
          { english: "We are", portuguese: "Nós somos / Nós estamos" },
          { english: "They are", portuguese: "Eles são / Eles estão" },
        ],
      },
      {
        subtitle: "Negative Conjugations!",
        comments:
          "É assim que você conjuga 'ser' ou 'estar' em inglês, se estiver negando!",
        order: 1,
        type: "sentences",
        sentences: [
          {
            english: "I am not / I'm not",
            portuguese: "Eu não sou / Eu não estou",
          },
          {
            english: "You are not / You aren't / You're not",
            portuguese: "Você não é / Você não está",
          },
          {
            english: "He is not / He isn't / He's not",
            portuguese: "Ele não é / Ele não está",
          },
          {
            english: "She is not / She isn't / She's not",
            portuguese: "Ela não é / Ela não está",
          },
          {
            english: "It is not / It isn't / It's not",
            portuguese: "Ele/Ela não é / Está",
          },
        ],
      },
      {
        subtitle: "Interrogative Conjugations!",
        comments:
          "É assim que você conjuga 'ser' ou 'estar' em inglês, se estiver perguntando!",
        order: 2,
        type: "sentences",
        sentences: [
          { english: "Am I?", portuguese: "Eu sou? / Eu estou?" },
          { english: "Are you?", portuguese: "Você é? / Você está?" },
          { english: "Is he?", portuguese: "Ele é? / Ele está?" },
          { english: "Is she?", portuguese: "Ela é? / Ela está?" },
          { english: "Is it?", portuguese: "Ele/Ela é? / Está?" },
          { english: "Are we?", portuguese: "Nós somos? / Nós estamos?" },
          { english: "Are they?", portuguese: "Eles são? / Eles estão?" },
        ],
      },
      {
        subtitle: "Vocabulary",
        comments: "Vocabulário para praticar",
        order: 3,
        type: "sentences",
        sentences: [
          {
            english: "Here",
            portuguese: "Aqui",
          },
          {
            english: "There",
            portuguese: "Lá / Aí",
          },
          {
            english: "Friend",
            portuguese: "Amigo (a)",
          },
          {
            english: "Enemy",
            portuguese: "Inimigo (a)",
          },
          {
            english: "Happy",
            portuguese: "Feliz",
          },
          {
            english: "Sad",
            portuguese: "Triste",
          },
        ],
      },
      {
        subtitle: "Examples in Sentences",
        comments: "Veja algumas frases abaixo que usam o verbo 'To be'",
        order: 4,
        image:
          "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/business.jpg?updatedAt=1697220823801",
        type: "sentences",
        sentences: [
          { english: "I am a student.", portuguese: "Eu sou um estudante." },
          { english: "You are my friend.", portuguese: "Você é meu amigo." },
          { english: "She is a teacher.", portuguese: "Ela é uma professora." },
          {
            english: "We are going to the park.",
            portuguese: "Estamos indo para o Parque.",
          },
          {
            english: "They are studying for the exam.",
            portuguese: "Eles estão estudando para o exame.",
          },
          {
            english: "Am I late for the meeting?",
            portuguese: "Estou atrasado para a reunião?",
          },
          {
            english: "Are you coming to the party?",
            portuguese: "Você está vindo para a festa?",
          },
          { english: "Is he your brother?", portuguese: "Ele é seu irmão?" },
          {
            english: "Are we going to the movies tonight?",
            portuguese: "Vamos ao cinema hoje à noite?",
          },
          {
            english: "Are they from France?",
            portuguese: "Eles são da França?",
          },
          {
            english: "Mark is not a nice person.",
            portuguese: "Mark não é uma pessoa legal.",
          },
          {
            english: "We are not on vacation.",
            portuguese: "Não estamos de férias.",
          },
          {
            english: "They aren’t aware of the changes.",
            portuguese: "Eles não estão cientes das mudanças.",
          },
          {
            english: "I am not interested in that!",
            portuguese: "Eu não estou interessado nisso!",
          },
          {
            english: "You aren't allowed to enter.",
            portuguese: "Você não tem permissão para entrar.",
          },
          {
            english: "She isn't my friend.",
            portuguese: "Ela não é minha amiga.",
          },
        ],
      },
      {
        subtitle: "Vocabulary",
        comments: "Vocabulário para praticar",
        order: 5,
        type: "sentences",
        sentences: [
          {
            english: "Here",
            portuguese: "Aqui",
          },
          {
            english: "Looking for",
            portuguese: "Procurando",
          },
          {
            english: "Mall",
            portuguese: "Shopping",
          },
          {
            english: "Parents",
            portuguese: "Pais (os 2)",
          },
          {
            english: "Beach",
            portuguese: "Praia",
          },
          {
            english: "Engineer",
            portuguese: "Engenheiro (a)",
          },
          {
            english: "Close",
            portuguese: "Perto",
          },
          {
            english: "Nurse",
            portuguese: "Enfermeiro (a)",
          },
          {
            english: "Twins",
            portuguese: "Gêmeos",
          },
          {
            english: "Expensive",
            portuguese: "Caro",
          },
          {
            english: "Earlier",
            portuguese: "Mais cedo",
          },
          {
            english: "Year",
            portuguese: "Ano",
          },
          {
            english: "First",
            portuguese: "Primeiro",
          },
          {
            english: "Second",
            portuguese: "Segundo",
          },
        ],
      },
      {
        subtitle: "Dialogue Practice #1",
        order: 6,
        type: "dialogue",
        dialogue: [
          "Hi",
          "Hello",
          "How are you?",
          "I am fine, thank you. And you?",
          "I am good too, thank you.",
          "Are you a student?",
          "Yes, I am. Are you a teacher?",
          "No, I am not. I am a student too.",
          "Is this your first year?",
          "Yes, it is. Is this your first year too?",
          "No, it is not. It is my second year.",
        ],
      },
      {
        subtitle: "Dialogue Practice #2",
        order: 6,
        type: "dialogue",
        dialogue: [
          "Hey, Is Martha here? Tom is looking for her.",
          "No, she isn't, she's at the mall.",
        ],
      },
      {
        subtitle: "Dialogue Practice #3",
        order: 7,
        type: "dialogue",
        dialogue: [
          "Who is she?",
          "She is my sister.",
          "Is she a doctor?",
          "No, she is not. She is a nurse.",
          "Where is he from?",
          "He is from Brazil.",
          "Are they siblings?",
          "Yes, they are. They are twins.",
          "Is it expensive?",
          "Yes, it is. It is very expensive.",
        ],
      },
      {
        subtitle: "Dialogue Practice #4",
        order: 8,
        type: "dialogue",
        dialogue: [
          "Who are they?",
          "They are my parents.",
          "Are they teachers?",
          "No, they are not. They are engineers.",
          "Where are they going?",
          "They are going to the beach.",
          "Is it far?",
          "No, it is not. It is quite close.",
          "Are you sure?",
          "Yes, I am. I asked them earlier.",
        ],
      },
    ],
  },
  ///////////////// Vocabulary Basics
  {
    title: "Animals",
    order: 6,
    type: "Basic Vocabulary",
    // description: "Os artigos em inglês são 'A', 'An' e 'The'.",
    // image:
    //   "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/tobe..png?updatedAt=1716236209531",
    elements: [
      {
        subtitle: "Common Animals",
        order: 0,
        type: "images",
        images: [
          {
            img: "https://media.istockphoto.com/id/1482199015/pt/foto/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=XI-fFXTXEU4UbQtGwM_vWzBB4F17W4dlPtXL4wr2dmE=",
            text: "Dog",
          },
          {
            img: "https://media.istockphoto.com/id/1443562748/pt/foto/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=OqlMF3bysUX6cVux5kKc1gqCGMghQpGc5ukyw1qG82s=",
            text: "Cat",
          },
          {
            img: "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Bird",
          },
          {
            img: "https://media.istockphoto.com/id/1353747129/pt/foto/gold-fish-swimming-underwater.jpg?s=612x612&w=0&k=20&c=3cQZfHlKUMz-46FmzLfKTGw7jkqKKQJQBhtxtaoQb1M=",
            text: "Fish",
          },
          {
            img: "https://media.istockphoto.com/id/483797166/pt/foto/cavalo-andaluz.jpg?s=612x612&w=0&k=20&c=-aKexRd308c2Sp9pC_3cEINhU9PGG8rTqjWKfDTJhYg=",
            text: "Horse",
          },
          {
            img: "https://media.istockphoto.com/id/1428640160/pt/foto/cow-isolated-on-white-standing-upright-black-and-white-full-length-and-front-view-and-copy.jpg?s=612x612&w=0&k=20&c=MwWpcK7CPz3lUDyCUnb6I5R3ScMK2sDpnwbI-Mj5vf8=",
            text: "Cow",
          },
          {
            img: "https://media.istockphoto.com/id/161953792/pt/foto/vista-lateral-de-uma-ovelha-olhando-para-longe-contra-o-fundo-branco.jpg?s=612x612&w=0&k=20&c=duXlJazhMNVPW7BaCTSlE9C9hdYpsfJUpXJ4V80Kpiw=",
            text: "Sheep",
          },
          {
            img: "https://media.istockphoto.com/id/140462837/pt/foto/porco-engra%C3%A7ado-inclinar-se-no-parapeito-da-sua-cot.jpg?s=612x612&w=0&k=20&c=ijUoPjQG4yE5cuRcKKxSZ7ztwPdYGGLLLU69d4pk96s=",
            text: "Pig",
          },
          {
            img: "https://media.istockphoto.com/id/1354939778/pt/foto/close-up-of-a-roaring-lion.jpg?s=612x612&w=0&k=20&c=Og23ITwdHr6xRP_KTAD4x2a07pUbJ_OCNHtYnstg1rw=",
            text: "Lion",
          },
          {
            img: "https://media.istockphoto.com/id/1335797147/pt/foto/sumatran-tiger-roaring.jpg?s=1024x1024&w=is&k=20&c=vuJbUZ6HGPy9ux60JNWvj6up6gtbexaQCUnYnAaziTQ=",
            text: "Tiger",
          },
          {
            img: "https://media.istockphoto.com/id/479667835/pt/foto/elefante-de-fundo.jpg?s=612x612&w=0&k=20&c=oIV_X_5GwkCzzFfrMbxXwooVeRrLc5IGA0lmlvFSv_o=",
            text: "Elephant",
          },
          {
            img: "https://media.istockphoto.com/id/944271706/pt/foto/young-chimpanzee-sitting-simia-troglodytes-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=tVy-VkVaOmM8NY03u6PnkhGSZF9Z6soDSW8YdcmiulY=",
            text: "Monkey",
          },
          {
            img: "https://media.istockphoto.com/id/488580536/pt/foto/girafa-na-frente-de-kilimanjaro-montanha.jpg?s=612x612&w=0&k=20&c=Q6vsFRLVbsQbJuAQqPsiPNTA9_5Lma57Vba0xF9FQqo=",
            text: "Giraffe",
          },
          {
            img: "https://media.istockphoto.com/id/170048830/pt/foto/rir-zebra.jpg?s=612x612&w=0&k=20&c=_FEMS1lCaJKqEtO6tttsMRzS4QGjWRtbdnXbBZry-SA=",
            text: "Zebra",
          },
          {
            img: "https://media.istockphoto.com/id/163639080/pt/foto/urso-cinzento.jpg?s=612x612&w=0&k=20&c=XYwtapDQXQ66diZbrfwaP9_4BYmrgpBZ_YYGbRSZOyg=",
            text: "Bear",
          },
          {
            img: "https://media.istockphoto.com/id/1359866154/pt/foto/little-red-fluffy-rabbit-on-light-green-background.jpg?s=612x612&w=0&k=20&c=fLnEnTm_OhAv6ZBVFH7ZqfaZlAkMaqBPupVp2romrGE=",
            text: "Rabbit",
          },
          {
            img: "https://media.istockphoto.com/id/516318760/pt/foto/raposa-vermelha-vulpes-vulpes.jpg?s=612x612&w=0&k=20&c=9YTCdFJghOt9Cz73wq0y3_zkcC5x5-NQCDe1yEUPAI8=",
            text: "Fox",
          },
          {
            img: "https://media.istockphoto.com/id/177794699/pt/foto/lobo-cinzento-retrato.jpg?s=612x612&w=0&k=20&c=iZHohTbptMVPjsS2l08tCX_LLoGVVyowGYUg4sI1yc4=",
            text: "Wolf",
          },
          {
            img: "https://images.pexels.com/photos/106685/pexels-photo-106685.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Owl",
          },
          {
            img: "https://media.istockphoto.com/id/525733140/pt/foto/golfinho-recife-debaixo-de-%C3%A1gua-no-fundo.jpg?s=612x612&w=0&k=20&c=2b2AQ6wA85GQvnbVV8r8mIfTOVtqfF_2iN54EcxXA9A=",
            text: "Dolphin",
          },
          {
            img: "https://media.istockphoto.com/id/1399799270/pt/foto/extreme-close-up-of-great-white-shark-looking-directly-at-camera-smiling.jpg?s=612x612&w=0&k=20&c=A3mOrWUFUHiubuytJinpn3S3rQRUP5tiIT6G1qDs39g=",
            text: "Shark",
          },
        ],
      },
      {
        subtitle: "Additional Expressions",
        order: 1,
        type: "images",
        images: [
          {
            img: "https://media.istockphoto.com/id/483770579/pt/foto/cocker-cachorrinho-sentado-olhando-para-a-c%C3%A2mera-isolado-a-branco.jpg?s=612x612&w=0&k=20&c=YCs-x7NE2MwZgre1HV5yOaEtoZY3Rj-82-Nd--k2ZMs=",
            text: "Puppy",
          },
          {
            img: "https://media.istockphoto.com/id/1018078858/pt/foto/gorgeous-ginger-cat-on-isolated-black-background.jpg?s=612x612&w=0&k=20&c=CtTsSC8y35N4R9sneaSwlCbCWe8SsAHAgZmqSjZqsIU=",
            text: "Kitty",
          },
        ],
      },
    ],
  },
  {
    title: "Fruits",
    order: 6,
    type: "Basic Vocabulary",
    // description: "Os artigos em inglês são 'A', 'An' e 'The'.",
    // image:
    //   "https://ik.imagekit.io/vjz75qw96/assets/assets_for_classes/tobe..png?updatedAt=1716236209531",
    elements: [
      {
        // subtitle: "Fruits",
        order: 0,
        type: "images",
        images: [
          {
            img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Apple",
          },
          {
            img: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Banana",
          },
          {
            img: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Orange",
          },
          {
            img: "https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
            text: "Grapes",
          },
          {
            img: "https://images.pexels.com/photos/14821717/pexels-photo-14821717.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Strawberry",
          },
          {
            img: "https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Pear",
          },
          {
            img: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Pineapple",
          },
          {
            img: "https://images.pexels.com/photos/3429784/pexels-photo-3429784.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Watermelon",
          },
          {
            img: "https://images.pexels.com/photos/142890/pexels-photo-142890.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Avocado",
          },
          {
            img: "https://images.pexels.com/photos/39303/mango-tropical-fruit-juicy-sweet-39303.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Mango",
          },
          {
            img: "https://images.pexels.com/photos/54370/pexels-photo-54370.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Kiwi",
          },
          {
            img: "https://images.pexels.com/photos/19937268/pexels-photo-19937268/free-photo-of-comida-alimento-refeicao-jardim.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Peach",
          },
          {
            img: "https://images.pexels.com/photos/768009/pexels-photo-768009.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Cherry",
          },
          {
            img: "https://images.pexels.com/photos/1343537/pexels-photo-1343537.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Lemon",
          },
          {
            img: "https://images.pexels.com/photos/1047261/pexels-photo-1047261.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Lime",
          },
        ],
      },
    ],
  },

  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  /////////////////
  {
    title: "Model",
    type: "Intermediary",
    order: 0.1,
    image:
      "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",
    elements: [
      {
        subtitle: "Sentences 1",
        comments: "Lorem Ipsun",
        order: 0,
        type: "sentences",
        sentences: [
          { english: "Hello!", portuguese: "Olá!" },
          { english: "Hi", portuguese: "Oi" },
          { english: "How are you?", portuguese: "Como você está?" },
          { english: "I’m fine", portuguese: "Estou bem" },
          { english: "I’m good", portuguese: "Estou bem" },
          { english: "I’m doing well.", portuguese: "Estou indo bem" },
          { english: "Good morning!", portuguese: "Bom dia!" },
          { english: "Good afternoon!", portuguese: "Boa tarde!" },
          { english: "Good evening!", portuguese: "Boa noite!" },
          { english: "Good night!", portuguese: "Boa noite!" },
          { english: "Nice to meet you!", portuguese: "Prazer em conhecê-lo!" },
        ],
      },
      {
        subtitle: "Texto 2",
        image:
          "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",

        order: 2,
        type: "text",
        text: "We help brands provide better customer service at scale by analyzing, enriching, and automating text communication.",
      },
      {
        subtitle: "Texto 3",
        order: 3,
        type: "text",
        text: "Text.app is a simple text editor for Chrome OS and Chrome. It's fast, lets you open multiple files at once, has syntax highlighting, and saves to Google Drive",
      },
      {
        subtitle: "Textosssssss 3",
        image:
          "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",

        order: 5,
        type: "multipletexts",
        subtexts: [
          {
            subtexttitle: "Sub Sub Text",
            text: "Sub Sub Arthur Text 222Text 222Text 222",
          },
          {
            subtexttitle: "Sub Sub Text 2",
            text: "Sub Sub Text Card 222Text 222Text 222",
          },
          {
            subtexttitle: "Sub Sub Text3",
            text: "Sub Sub Text See 222Text 222Text 222",
          },
        ],
      },
      {
        subtitle: "Sentences 2",
        comments: "Lorem Ipsun",
        order: 4,
        image:
          "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",

        type: "sentences",
        sentences: [
          {
            english: "How are you?",
            portuguese: "Tudo bem? / Como você está?",
          },
          { english: "Thank you", portuguese: "Obrigado (a)" },
          { english: "Please", portuguese: "Por favor." },
          { english: "Goodbye", portuguese: "Tchau." },
          { english: "What’s your name?", portuguese: "Qual é o seu nome?" },
          { english: "Where are you from?", portuguese: "De onde você é?" },
          { english: "I don't understand.", portuguese: "Eu não entendo." },
          { english: "Can you help me?", portuguese: "Você pode me ajudar?" },
          { english: "I'm sorry", portuguese: "Desculpe-me" },
          { english: "How old are you?", portuguese: "Quantos anos você tem?" },
          { english: "Excuse me.", portuguese: "Com licença." },
        ],
      },
      {
        subtitle: "Vocabulary Images 1",
        order: 9,
        type: "images",
        images: [
          {
            img: "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/SX40cap5bvPvcFkHzKBXTdVkAISZKF16cMl3AAAy8a3.png",
            text: "owl",
          },
          {
            img: "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_25,dpr_1/https://assets.app.engoo.com/logos/2FpaQO4zsyNdSYuaGUXYwH.png",
            text: "logo",
          },
          {
            img: "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",
            text: "foto",
          },
        ],
      },
      {
        subtitle: "Textosssssss 3",
        image:
          "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",

        order: 5,
        type: "multipletexts",
        subtexts: [
          {
            subtexttitle: "Sub Sub Text",
            text: "Sub Sub Arthur Text 222Text 222Text 222",
          },
          {
            subtexttitle: "Sub Sub Text 2",
            text: "Sub Sub Text Card 222Text 222Text 222",
          },
          {
            subtexttitle: "Sub Sub Text3",
            text: "Sub Sub Text See 222Text 222Text 222",
          },
        ],
      },
      {
        subtitle: "Dialogue 1",
        // image: "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,h_384,dpr_1/https://assets.app.engoo.com/images/07uKbOO8vU2Msen2YRbijJ.jpeg",
        order: 6,
        type: "dialogue",
        dialogue: ["Hi", "Hello", "How are you?", "Fine"],
      },
    ],
  },
];
