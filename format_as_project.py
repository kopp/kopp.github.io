import pyperclip

text = pyperclip.paste().strip()

# print(text)

[name_line, _, description] = text.splitlines()

name = name_line.split(" ")[0]

# print("name:", name)
# print("description:", description)


template = """
          <GithubProject
            project="{name}"
            name="{name}"
            description="{description}"
            isWebApp={{false}}
          />
"""

formatted_text = template.format(name=name, description=description).strip()
pyperclip.copy(formatted_text)
