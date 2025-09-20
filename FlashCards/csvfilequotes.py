import re

def replace_commas_in_file(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f_in, \
         open(output_file, "w", encoding="utf-8") as f_out:
        
        for line in f_in:
            # Replace commas that are not already surrounded by quotes
            new_line = re.sub(r'(?<!"),(?!")', '","', line.strip())
            f_out.write(new_line + "\n")

# Example usage
replace_commas_in_file("input.csv", "output.csv")
