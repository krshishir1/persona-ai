const { AzureOpenAI } = require("openai");
require("dotenv").config();

const endpoint = process.env.OPENAI_ENDPOINT;
const apiKey = process.env.OPENAI_KEY1;
const apiVersion = "2024-04-01-preview";
const deployment = "gpt-35-turbo";

async function generateConcerns(
  brandName,
  productDesc,
  businessType,
  industry,
  numResponse = 1
) {
  try {
    console.log("== Get completions Sample ==");
    const client = new AzureOpenAI({
      endpoint,
      apiKey,
      apiVersion,
      deployment,
    });

    let prompt = `
You are a marketing expert creating a customer persona for a brand. Based on the following information, generate a detailed persona that includes demographics, personality traits, professional goals, challenges, and why the person would be interested in the brand.

Brand Name: ${brandName}
Product Description: ${productDesc}

### Output (Return exactly ${numResponse} completely distinct and creative personas as an array in JSON format only.) ###
{
    "response"(${numResponse} response): [
        {
    "name": <Persona Name>,
    "age": <Age>,
    "gender": <Gender>,
    "race": <Racial Background>,
    "occupation": <Occupation>,
    "location": <Location>,
    "industry": <Industry>,
    "background": {
        "education": <Education (include college names)> (max 1 line),
        "work_environment": <Work Environment> (max 2 lines),
        "income": <Income> (max 1 line)
    },
    "hobbies": {
        "personal_interests": <Personal interests>,
        "work_related": <Work related interests>
    }
    "professional_goal": {
        "primary_goal": <Primary_Goal>,
        "secondary_goal": <Secondary_Goal>
    }
    "pain_points"(give at least 3): [
    {
    "title1": <Title>,
    "description1": <Description>
    }],
    "usecase_product"(give at least 2): [
        {
        "title": <Title> (3-7 words),
        "description": <Description> (Min 30 words, explain how the persona will use the product)
        }
    ],
    "features_needed"(give at least 2): [
        {
        "feature": <Feature>,
        "description": <Description> (Elaborate about feature in Min. 30 words)
        }
    ],
}]}
<end>    

Generate this persona in a friendly and engaging way that marketers and business owners can relate to.
  `;

    prompt = `
  Based on the following details:
  Brand Name: ${brandName}
  Product Description**: ${productDesc}
  Business Type: ${businessType} (B2B or B2C)
  Industry: ${industry}

  Generate questions that potential customers might have about the product. For each question, provide a one-paragraph solution addressing the customer’s concern directly and suggesting how the product or service can alleviate it. Have a minimum of ${numResponse} questions and answers.

  Format the output as:
  {
    "response": [
      {
    
        "question": <Question>,
        "proposed_solution": <Answer> (Paragraph format)
      }
    ]
  }
    <end>
  `;

    const result = await client.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: deployment,
      max_tokens: 500 * numResponse,
      temperature: 0.8,
      stop: ["<end>"],
    });

    console.log(result);

    const finalResponse = {};

    result.choices.forEach(async (choice, idx) => {
      try {
        let response = choice.message.content;
        console.log(`Persona ${idx}: ${response}`);

        const pRes = await JSON.parse(response);
        finalResponse.personas = pRes.response;
      } catch (err) {
        console.log("Error parsing JSON: ", idx, err);
      }
    });

    return finalResponse;
  } catch (err) {
    console.log(err);
  }
}

// generatePersona(
//   "Onmail",
//   "Onmail is an email productivity tool that helps users manage their emails more efficiently.",
//   2
// );

generateConcerns(
  "EcoTracker", 
  "A carbon footprint tracker that helps users monitor and reduce their environmental impact.", 
  "B2C", 
  "SaaS"
)

module.exports = { generateConcerns };
