import re

def replace_commas_in_file(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f_in, \
         open(output_file, "w", encoding="utf-8") as f_out:
        
        for line in f_in:
            line = line.strip()
            
            # Add " at the beginning if not already present
            if not line.startswith('"'):
                line = '"' + line
            
            # Replace commas that are not already surrounded by quotes
            new_line = re.sub(r'(?<!"),(?!")', '","', line)
            
            f_out.write(new_line + "\n")

# Example usage
replace_commas_in_file("input-water-sources.csv", "output-water-sources.csv")