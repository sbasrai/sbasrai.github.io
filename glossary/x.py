import re

# 1. word file -> plain text file
# 2. put into structured data form
# 3. all computations
# - remove duplicates
# - sort alphabetically
# - flag duplicates with different definitions
# 4. convert structured data back to human readable form 

# put into structured data form
with open('glossary.txt') as f:
    lines = f.read()

r = re.compile(r"\ ?([A-Z\ ]+)((\ -\ )|(:\ ))(.*)\n")

entries = r.finditer(lines)

xs = []

for e in entries:
    xs.append({
        "term": e.group(1),
        "definition": e.group(5)
    })

def s(x):
    return x.get("term")

# sort alphabetically
xs.sort(key=s)

f = open("output.txt", "w")

# write output file at the same time as handling duplicates
for i in range(len(xs)):
    x = xs[i]

    xterm = x.get("term")
    pterm = ""
    nterm = ""

    xdef = x.get("definition")
    pdef = ""
    ndef = ""

    if i > 0:
        pterm = xs[i-1].get("term")
        pdef = xs[i-1].get("definition")

    if i < len(xs) - 1:
        nterm = xs[i+1].get("term")
        ndef = xs[i+1].get("definition")

    if xdef == pdef:
        continue
        
    if xterm == pterm or (xterm == nterm and xdef != ndef):
        f.write("***")

    f.write(xterm + "\n" + xdef + "\n\n")
