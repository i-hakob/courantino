import { Section } from '@/types/content';

export const FRENCH_SECTION: Section = {
  id: 'french-basics',
  title: 'French Basics',
  language: 'fr',
  lessons: [
    // LESSON 1 - First Words
    {
      id: 'french-basics-1',
      title: 'First Words',
      questions: [
        {
          id: 'q1',
          prompt: 'Learn the new word: \n\n"Salut" means...',
          options: ['Thanks', 'Cat', 'Firework', 'Hi'],
          correctAnswer: 'Hi',
        },
        {
          id: 'q2',
          prompt: 'Learn the expression: \n\n"Je m’appelle" means...',
          options: ['And you?', 'My name is', 'Thank you', 'Goodbye'],
          correctAnswer: 'My name is',
        },
        {
          id: 'q3',
          prompt: 'Complete: \n\n"Salut, je m’appelle ___!"',
          options: ['Chat', 'Merci', 'Bonjour', 'Bob'],
          correctAnswer: 'Bob',
        },
        {
          id: 'q4',
          prompt: 'Learn the new word: \n\n"Et"',
          options: ['What', 'How', 'And', 'Helicopter'],
          correctAnswer: 'And',
        },
        {
          id: 'q5',
          prompt: 'Translate into French: \n\n"Hi"',
          options: ['Au revoir', 'Merci', 'Bonjour', 'Salut'],
          correctAnswer: 'Salut',
        },
        {
          id: 'q6',
          prompt: 'Complete the sentence: \n\n"___, je m’appelle Bob!"',
          options: ['Merci', 'Au revoir', 'Salut', 'Chat'],
          correctAnswer: 'Salut',
        },
        {
          id: 'q7',
          prompt: 'Learn the new word: \n\n"Merci" means...',
          options: ['Goodbye', 'Hello', 'My name is', 'Thank you'],
          correctAnswer: 'Thank you',
        },
        {
          id: 'q8',
          prompt: 'Complete: \n\n"Salut! Je m’appelle Bob. ___ toi?"',
          options: ['Bonjour', 'Et', 'Au revoir', 'Merci'],
          correctAnswer: 'Et',
        },
        {
          id: 'q9',
          prompt: 'Translate into French: \n\n"My name is Léa."',
          options: ['Au revoir Léa.', 'Je m’appelle Léa.', 'Salut Léa.', 'Merci Léa.'],
          correctAnswer: 'Je m’appelle Léa.',
        },
        {
          id: 'q10',
          prompt: 'Learn the new word: \n\n"Bonjour"',
          options: ['What', 'Hello', 'Time', 'Wow'],
          correctAnswer: 'Hello',
        },
        {
          id: 'q11',
          prompt: 'Put the words together: \n\n"Hello, my name is Michael Scofield."',
          options: ['Merci, Michael Scofield.', 'Bonjour, je m’appelle Michael Scofield.', 'Au revoir, Michael.', 'Et toi, Scofield?'],
          correctAnswer: 'Bonjour, je m’appelle Michael Scofield.',
        },
      ],
    },
    // LESSON 2 - Meeting Someone
    {
      id: 'french-basics-2',
      title: 'Meeting Someone',
      questions: [
        {
          id: 'q1',
          prompt: 'Learn the expression: \n\n"Comment tu t’appelles?" means...',
          options: ['Thank you', 'What is your name?', 'How are you?', 'Goodbye'],
          correctAnswer: 'What is your name?',
        },
        {
          id: 'q2',
          prompt: 'Complete: "Salut! Comment tu ___?"',
          options: ['appelle', 't’appelles', 'm’appelle', 's’appelle'],
          correctAnswer: 't’appelles',
        },
        {
          id: 'q3',
          prompt: 'Learn the expression: \n\n"Et toi?" means...',
          options: ['My name is', 'And you?', 'Goodbye', 'Nice to meet you'],
          correctAnswer: 'And you?',
        },
        {
          id: 'q4',
          prompt: 'Complete: \n\n"Je m’appelle Léa. ___ toi?"',
          options: ['Bonjour', 'Et', 'Merci', 'Salut'],
          correctAnswer: 'Et',
        },
        {
          id: 'q5',
          prompt: 'Learn the expression: \n\n"Enchanté" means...',
          options: ['Hello', 'Thank you', 'Goodbye', 'Nice to meet you'],
          correctAnswer: 'Nice to meet you',
        },
        {
          id: 'q6',
          prompt: 'Complete: \n\n"Je m’appelle Bob. ___!"',
          options: ['Comment', 'Merci', 'Enchanté', 'Au revoir'],
          correctAnswer: 'Enchanté',
        },
        {
          id: 'q7',
          prompt: 'Translate into French: \n\n"What is your name?"',
          options: ['Je m’appelle.', 'Comment tu t’appelles?', 'Salut.', 'Et toi?'],
          correctAnswer: 'Comment tu t’appelles?',
        },
        {
          id: 'q8',
          prompt: 'Translate into French: \n\n"And you?"',
          options: ['Au revoir!', 'Merci!', 'Et toi?', 'Enchanté!'],
          correctAnswer: 'Et toi?',
        },
        {
          id: 'q9',
          prompt: 'Complete: \n\n"Salut! Je m’appelle Emma. Et ___?"',
          options: ['salut', 'toi', 'merci', 'comment'],
          correctAnswer: 'toi',
        },
        {
          id: 'q10',
          prompt: 'Translate into English: \n\n"Merci, au revoir!"',
          options: ['Nice to meet you!', 'Thanks, goodbye!', 'And you?', 'Hello, my name is!'],
          correctAnswer: 'Thanks, goodbye!',
        },
      ],
    },
    // LESSON 3 - How Are You
    {
      id: 'french-basics-3',
      title: 'How Are You',
      questions: [
        {
          id: 'q1',
          prompt: 'Learn the expression: \n\n"Ça va?" means...',
          options: ['Goodbye', 'What is your name?', 'Thank you', 'How’s it going?'],
          correctAnswer: 'How’s it going?',
        },
        {
          id: 'q2',
          prompt: 'Learn the new word: \n\n"bien" means...',
          options: ['Hello', 'Bad', 'Goodbye', 'Good'],
          correctAnswer: 'Good',
        },
        {
          id: 'q3',
          prompt: 'Complete: \n\n"Ça va ___, merci!"',
          options: ['salut', 'bien', 'toi', 'mal'],
          correctAnswer: 'bien',
        },
        {
          id: 'q4',
          prompt: 'Learn the new word: \n\n"mal" means...',
          options: ['So-so', 'Bad', 'Good', 'Hello'],
          correctAnswer: 'Bad',
        },
        {
          id: 'q5',
          prompt: 'Complete: \n\n"Ça va? Non, ça va ___."',
          options: ['toi', 'mal', 'merci', 'bien'],
          correctAnswer: 'mal',
        },
        {
          id: 'q6',
          prompt: 'Translate into French: \n\n"Good"',
          options: ['Merci', 'Mal', 'Salut', 'Bien'],
          correctAnswer: 'Bien',
        },
        {
          id: 'q7',
          prompt: 'Translate into French: \n\n"How’s it going?"',
          options: ['Bonjour', 'Ça va?', 'Bien', 'Et toi?'],
          correctAnswer: 'Ça va?',
        },
        {
          id: 'q8',
          prompt: 'Complete: \n\n"Ça va bien, ___! Et toi?"',
          options: ['mal', 'merci', 'salut', 'famille'],
          correctAnswer: 'merci',
        },
        {
          id: 'q9',
          prompt: 'Translate into English: \n\n"Ça va bien, merci!"',
          options: ['Goodbye, thanks!', 'What’s your name?', 'Nice to meet you!', 'It’s going well, thanks!'],
          correctAnswer: 'It’s going well, thanks!',
        },
        {
          id: 'q10',
          prompt: 'Learn the expression: \n\n"Comme ci, comme ça" means...',
          options: ['Thank you', 'So-so', 'Goodbye', 'Very good'],
          correctAnswer: 'So-so',
        },
      ],
    },
    // LESSON 4 - My Family (1)
    {
      id: 'french-basics-4',
      title: 'My Family (1)',
      questions: [
        {
          id: 'q1',
          prompt: 'Learn the expression: \n\n"Voici" means...',
          options: ['Goodbye', 'And you?', 'Thank you', 'Here is'],
          correctAnswer: 'Here is',
        },
        {
          id: 'q2',
          prompt: 'Complete: \n\n"___ ma famille."',
          options: ['Salut', 'Voici', 'Enchanté', 'Merci'],
          correctAnswer: 'Voici',
        },
        {
          id: 'q3',
          prompt: 'Learn the new word: \n\n"père" means...',
          options: ['brother', 'father', 'mother', 'family'],
          correctAnswer: 'father',
        },
        {
          id: 'q4',
          prompt: 'Complete: \n\n"Voici mon ___."',
          options: ['salut', 'père', 'toi', 'merci'],
          correctAnswer: 'père',
        },
        {
          id: 'q5',
          prompt: 'Translate into English: \n\n"mon père"',
          options: ['my brother', 'my family', 'my father', 'my mother'],
          correctAnswer: 'my father',
        },
        {
          id: 'q6',
          prompt: 'Learn the new word: \n\n"mère" means...',
          options: ['family', 'mother', 'father', 'sister'],
          correctAnswer: 'mother',
        },
        {
          id: 'q7',
          prompt: 'Complete: \n\n"Voici ma ___."',
          options: ['famille', 'mère', 'père', 'sœur'],
          correctAnswer: 'mère',
        },
        {
          id: 'q8',
          prompt: 'Complete: \n\n"Salut! Voici mon père et ma ___."',
          options: ['maison', 'sœur', 'famille', 'mère'],
          correctAnswer: 'mère',
        },
        {
          id: 'q9',
          prompt: 'Translate into French: \n\n"Here is my father."',
          options: ['Voici ma mère.', 'Voici mon père.', 'Je m’appelle mon père.', 'Au revoir, père.'],
          correctAnswer: 'Voici mon père.',
        },
        {
          id: 'q10',
          prompt: 'Put it together: \n\n"Hi, here is my mother!"',
          options: ['Bonjour, je m’appelle ma mère!', 'Salut, voici ma mère!', 'Merci, voici mon père!', 'Au revoir, ma famille!'],
          correctAnswer: 'Salut, voici ma mère!',
        },
      ],
    },
    // LESSON 5 - My Family (2)
    {
      id: 'french-basics-5',
      title: 'My Family (2)',
      questions: [
        {
          id: 'q1',
          prompt: 'Learn the new word: \n\n"frère" means...',
          options: ['mother', 'father', 'sister', 'brother'],
          correctAnswer: 'brother',
        },
        {
          id: 'q2',
          prompt: 'Complete: \n\n"Voici mon ___."',
          options: ['famille', 'frère', 'merci', 'toi'],
          correctAnswer: 'frère',
        },
        {
          id: 'q3',
          prompt: 'Learn the new word: \n\n"sœur" means...',
          options: ['father', 'sister', 'brother', 'mother'],
          correctAnswer: 'sister',
        },
        {
          id: 'q4',
          prompt: 'Complete: \n\n"Voici ma ___."',
          options: ['frère', 'sœur', 'famille', 'père'],
          correctAnswer: 'sœur',
        },
        {
          id: 'q5',
          prompt: 'Translate into French: \n\n"my brother"',
          options: ['ma sœur', 'ma mère', 'mon frère', 'mon père'],
          correctAnswer: 'mon frère',
        },
        {
          id: 'q6',
          prompt: 'Translate into French: \n\n"my sister"',
          options: ['mon père', 'ma mère', 'ma sœur', 'mon frère'],
          correctAnswer: 'ma sœur',
        },
        {
          id: 'q7',
          prompt: 'Complete: \n\n"Voici mon frère. Il ___ Léo."',
          options: ['m’appelle', 's’appelle', 't’appelles', 'appelle'],
          correctAnswer: 's’appelle',
        },
        {
          id: 'q8',
          prompt: 'Complete: \n\n"Voici ma sœur. Elle ___ Emma."',
          options: ['t’appelles', 's’appelle', 'm’appelle', 'appelle'],
          correctAnswer: 's’appelle',
        },
        {
          id: 'q9',
          prompt: 'Translate into English: \n\n"Voici mon frère et ma sœur."',
          options: ['Here are my parents.', 'Here is my family.', 'Here are my brother and my sister.', 'Goodbye, brother and sister.'],
          correctAnswer: 'Here are my brother and my sister.',
        },
        {
          id: 'q10',
          prompt: 'Put it together: \n\n"Hi, here is my brother and my sister."',
          options: ['Au revoir, ma famille.', 'Salut, voici mon frère et ma sœur.', 'Merci, voici ma mère et mon père.', 'Bonjour, je m’appelle mon frère.'],
          correctAnswer: 'Salut, voici mon frère et ma sœur.',
        },
      ],
    },
    // LESSON 6 - Family Sentences (review - no new words)
    {
      id: 'french-basics-6',
      title: 'Family Sentences',
      questions: [
        {
          id: 'q1',
          prompt: 'Review: \n\n"Voici ma famille." means...',
          options: ['Goodbye, family.', 'Here is my father.', 'My name is my family.', 'Here is my family.'],
          correctAnswer: 'Here is my family.',
        },
        {
          id: 'q2',
          prompt: 'Complete: \n\n"Salut! Voici ___ père."',
          options: ['ma', 'et', 'mes', 'mon'],
          correctAnswer: 'mon',
        },
        {
          id: 'q3',
          prompt: 'Complete: \n\n"Voici ma mère. ___ s’appelle Claire."',
          options: ['Je', 'Tu', 'Et', 'Elle'],
          correctAnswer: 'Elle',
        },
        {
          id: 'q4',
          prompt: 'Translate into French: \n\n"Here is my mother."',
          options: ['Voici ma sœur.', 'Voici ma famille.', 'Voici ma mère.', 'Voici mon père.'],
          correctAnswer: 'Voici ma mère.',
        },
        {
          id: 'q5',
          prompt: 'Complete: \n\n"Voici mon père. Il ___ Marc."',
          options: ['t’appelles', 's’appelle', 'appelle', 'm’appelle'],
          correctAnswer: 's’appelle',
        },
        {
          id: 'q6',
          prompt: 'Translate into English: \n\n"Enchanté! Voici mon frère."',
          options: ['Hello! Here is my family.', 'Nice to meet you! Here is my brother.', 'Goodbye! Here is my sister.', 'Thanks! Here is my mother.'],
          correctAnswer: 'Nice to meet you! Here is my brother.',
        },
        {
          id: 'q7',
          prompt: 'Complete: \n\n"Comment tu t’appelles? Je m’appelle Léa. ___ toi?"',
          options: ['Bonjour', 'Et', 'Voici', 'Merci'],
          correctAnswer: 'Et',
        },
        {
          id: 'q8',
          prompt: 'Complete: \n\n"Ça va? Ça va bien, ___!"',
          options: ['père', 'merci', 'famille', 'toi'],
          correctAnswer: 'merci',
        },
        {
          id: 'q9',
          prompt: 'Translate into French: \n\n"My name is Bob. Here is my family."',
          options: ['Comment tu t’appelles? Voici ma famille.', 'Je m’appelle Bob. Voici ma famille.', 'Au revoir, ma famille.', 'Je m’appelle Bob. Et toi?'],
          correctAnswer: 'Je m’appelle Bob. Voici ma famille.',
        },
        {
          id: 'q10',
          prompt: 'Put it all together: \n\n"Hi, what is your name? Here is my sister."',
          options: ['Merci, je m’appelle ma sœur.', 'Salut, comment tu t’appelles? Voici ma sœur.', 'Au revoir, voici mon père.', 'Bonjour, ça va ma famille?'],
          correctAnswer: 'Salut, comment tu t’appelles? Voici ma sœur.',
        },
      ],
    },
    // LESSON 7 - Object Sentences (review - no new words)
    {
      id: 'french-basics-7',
      title: 'Object Sentences',
      questions: [
        {
          id: 'q1',
          prompt: 'Translate into English: \n\n"J\'ai un chat et un chien."',
          options: [
            'I have a tank and a helicopter.',
            'I have a book and a table.',
            'I have a cat and a dog.',
            'I have a house and an apple.',
          ],
          correctAnswer: 'I have a cat and a dog.',
        },
        {
          id: 'q2',
          prompt: 'Complete this sentence: \n\n"Voici ___ maison."',
          options: ['des', 'un', 'une', 'la'],
          correctAnswer: 'une',
        },
        {
          id: 'q3',
          prompt: 'Translate into French: \n\n"I have an apple and a book."',
          options: [
            'J\'ai une pomme et un livre.',
            'J\'ai un chat et une table.',
            'J\'ai une maison et un chien.',
            'J\'ai un garçon et une fille.',
          ],
          correctAnswer: "J'ai une pomme et un livre.",
        },
        {
          id: 'q4',
          prompt: 'Complete this sentence: \n\n"Voici ___ garçon, il s\'appelle Léo."',
          options: ['la', 'une', 'des', 'un'],
          correctAnswer: 'un',
        },
        {
          id: 'q5',
          prompt: 'Translate into English: \n\n"Voici une table et une maison."',
          options: [
            'Here is a fish and a shark.',
            'Here is a cat and a dog.',
            'Here is a book and an apple.',
            'Here is a table and a house.',
          ],
          correctAnswer: 'Here is a table and a house.',
        },
        {
          id: 'q6',
          prompt: 'Complete this sentence: \n\n"J\'ai ___ chien et ___ chat."',
          options: ['un / une', 'une / une', 'un / un', 'une / un'],
          correctAnswer: 'un / un',
        },
        {
          id: 'q7',
          prompt: 'Translate into French: \n\n"Here is a girl and a boy."',
          options: [
            'Voici un chat et une table.',
            'Voici un chien et une maison.',
            'Voici une pomme et un livre.',
            'Voici une fille et un garçon.',
          ],
          correctAnswer: 'Voici une fille et un garçon.',
        },
        {
          id: 'q8',
          prompt: 'Complete this sentence: \n\n"Voici ___ pomme sur ___ table."',
          options: ['une / un', 'un / un', 'une / une', 'un / une'],
          correctAnswer: 'une / une',
        },
        {
          id: 'q9',
          prompt: 'Translate into English: \n\n"J\'ai une maison, un chien et un chat."',
          options: [
            'I have a house, a dog and a cat.',
            'I have a book, a table and an apple.',
            'I have a boy, a girl and a family.',
            'I have a mother, a father and a sister.',
          ],
          correctAnswer: 'I have a house, a dog and a cat.',
        },
        {
          id: 'q10',
          prompt: 'Translate into French: \n\n"I have a family, a house and a dog."',
          options: [
            'J\'ai un garçon, une fille et un chat.',
            'J\'ai un livre, une table et une pomme.',
            "J'ai une famille, une maison et un chien.",
            'J\'ai une pomme, un chien et une maison.',
          ],
          correctAnswer: "J'ai une famille, une maison et un chien.",
        },
      ],
    },
    // LESSON 8 - Deux
    {
      id: 'french-basics-8',
      title: 'Deux',
      questions: [
        {
          id: 'q1',
          prompt: 'Learn the new word: \n\n"deux" means...',
          options: ['one', 'two', 'four', 'three'],
          correctAnswer: 'two',
        },
        {
          id: 'q2',
          prompt: 'Complete: \n\n"J’ai ___ chats."',
          options: ['trois', 'un', 'cinq', 'deux'],
          correctAnswer: 'deux',
        },
        {
          id: 'q3',
          prompt: 'Translate into English: \n\n"deux livres"',
          options: ['one book', 'two apples', 'two books', 'two cats'],
          correctAnswer: 'two books',
        },
        {
          id: 'q4',
          prompt: 'Complete: \n\n"Voici ___ livres sur la table."',
          options: ['une', 'la', 'deux', 'un'],
          correctAnswer: 'deux',
        },
        {
          id: 'q5',
          prompt: 'Translate into French: \n\n"two apples"',
          options: ['deux chats', 'une pomme', 'deux pommes', 'deux livres'],
          correctAnswer: 'deux pommes',
        },
        {
          id: 'q6',
          prompt: 'Translate into English: \n\n"J’ai deux chats."',
          options: ['I have two dogs.', 'I have two cats.', 'Here are two cats.', 'I have one cat.'],
          correctAnswer: 'I have two cats.',
        },
        {
          id: 'q7',
          prompt: 'Complete: \n\n"J’ai deux sœurs et un ___."',
          options: ['livre', 'chien', 'frère', 'père'],
          correctAnswer: 'frère',
        },
        {
          id: 'q8',
          prompt: 'Complete: \n\n"Un, deux! J’ai ___ pommes."',
          options: ['trois', 'une', 'quatre', 'deux'],
          correctAnswer: 'deux',
        },
        {
          id: 'q9',
          prompt: 'Translate into French: \n\n"two"',
          options: ['trois', 'un', 'cinq', 'deux'],
          correctAnswer: 'deux',
        },
        {
          id: 'q10',
          prompt: 'Translate into English: \n\n"J’ai deux sœurs et un frère."',
          options: ['I have two cats and a dog.', 'I have two sisters and one brother.', 'I have two brothers and one sister.', 'I have two parents.'],
          correctAnswer: 'I have two sisters and one brother.',
        },
      ],
    },
    // LESSON 9 - Trois, Quatre, Cinq
    {
      id: 'french-basics-9',
      title: 'Trois, Quatre, Cinq',
      questions: [
        {
          id: 'q1',
          prompt: 'Learn the new word: "trois" means...',
          options: ['four', 'three', 'two', 'five'],
          correctAnswer: 'three',
        },
        {
          id: 'q2',
          prompt: 'Complete: \n\n"J’ai ___ pommes: une, deux, trois."',
          options: ['un', 'deux', 'quatre', 'trois'],
          correctAnswer: 'trois',
        },
        {
          id: 'q3',
          prompt: 'Learn the new word: \n\n"quatre" means...',
          options: ['three', 'four', 'two', 'five'],
          correctAnswer: 'four',
        },
        {
          id: 'q4',
          prompt: 'Complete: \n\n"Voici ___ chats dans la maison."',
          options: ['deux', 'trois', 'cinq', 'quatre'],
          correctAnswer: 'quatre',
        },
        {
          id: 'q5',
          prompt: 'Learn the new word: \n\n"cinq" means...',
          options: ['two', 'three', 'five', 'four'],
          correctAnswer: 'five',
        },
        {
          id: 'q6',
          prompt: 'Complete: \n\n"Un, deux, trois, quatre, ___!"',
          options: ['six', 'deux', 'cinq', 'quatre'],
          correctAnswer: 'cinq',
        },
        {
          id: 'q7',
          prompt: 'Translate into French: \n\n"three"',
          options: ['cinq', 'quatre', 'trois', 'deux'],
          correctAnswer: 'trois',
        },
        {
          id: 'q8',
          prompt: 'Translate into French: \n\n"four"',
          options: ['trois', 'un', 'quatre', 'cinq'],
          correctAnswer: 'quatre',
        },
        {
          id: 'q9',
          prompt: 'Translate into English: \n\n"J’ai cinq livres et deux pommes."',
          options: ['I have four books and three apples.', 'I have five dogs and two cats.', 'I have five books and two apples.', 'I have two books and five apples.'],
          correctAnswer: 'I have five books and two apples.',
        },
        {
          id: 'q10',
          prompt: 'Put it together: \n\n"Hi, here are five books and two apples."',
          options: ['Bonjour, j’ai deux livres et cinq pommes.', 'Salut, voici cinq livres et deux pommes.', 'Merci, voici quatre livres et trois pommes.', 'Au revoir, voici ma famille.'],
          correctAnswer: 'Salut, voici cinq livres et deux pommes.',
        },
      ],
    },
  ],
};