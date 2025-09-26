import re
import glob

def process_file(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f_in, \
         open(output_file, "w", encoding="utf-8") as f_out:
        
        first_line = True
        for line in f_in:
            line = line.strip()

            if first_line:
                # Write header as-is, no modifications
                f_out.write(line + "\n")
                first_line = False
                continue
            
            # Add " at the beginning if not already present
            if not line.startswith('"'):
                line = '"' + line
            
            # Add " at the end if not already present
            if not line.endswith('"'):
                line = line + '"'

            # Replace commas that are not already surrounded by quotes
            new_line = re.sub(r'(?<!"),(?!")', '","', line)

            f_out.write(new_line + "\n")

def process_all_files():
    # Find all files starting with 'input' and ending with '.csv'
    for file in glob.glob("input*.csv"):
        # Create output filename by replacing 'input' with 'output'
        output_file = file.replace("input", "output", 1)
        print(f"Processing {file} -> {output_file}")
        process_file(file, output_file)

# Run
process_all_files()