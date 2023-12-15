
import openai 
  
openai.api_key = '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'
messages = [ {"role": "system", "content": "You are a intelligent assistant."} ]

chat = openai.ChatCompletion.create( 
    model="gpt-3.5-turbo", messages=messages 
) 

reply = chat.choices[0].message.content 
print(f"ChatGPT: {reply}") 
messages.append({"role": "assistant", "content": reply}) 


