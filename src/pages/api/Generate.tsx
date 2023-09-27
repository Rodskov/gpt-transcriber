import openai from '@/utils/openai'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const gentext = ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { 
        role: 'user', 
        content: gentext 
      }
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices);

  res.status(200).json(chatCompletion.choices[0].message.content)
}
