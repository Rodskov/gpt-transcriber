import openai from '@/utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { gentext } = req.query;

  try {
    const parsedGentext = JSON.parse(gentext as string);
    if (typeof parsedGentext === 'object' && parsedGentext.message && parsedGentext.language && parsedGentext.character) {
      // Use parsedGentext here.
    } else {
      throw new Error('gentext is not a valid JSON object');
    }
    const jsonText = JSON.parse(parsedGentext);


    const message = jsonText.message;
    const language = jsonText.language;
    const character = jsonText.character;

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Translate ${message} into ${language} as a ${character}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices);

    res.status(200).json(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
}
