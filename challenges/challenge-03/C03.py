from typing import List
from functools import reduce
import json

def resolve():

    input_file = open('colors.txt')
    input_file_str = reduce(lambda acc, line: acc + line.replace('\'', '"'), input_file, '')
    colors: List[str] = json.loads(input_file_str)

    colors_enumerate = enumerate(colors, 2)

    zebras = [ 
        [colors[0], colors[1]]
    ]
    max_zebra = []

    for i, color in colors_enumerate:

        if zebras[-1][-1] != color and (len(zebras[-1]) == 1 or color == zebras[-1][-2] ):
            zebras[-1].append(color)
            continue

        if ( len(zebras[-1]) == 1 and zebras[-1][-1] == color ) or ( zebras[-1][-1] != color and color != zebras[-1][-2] ):
            max_zebra = zebras[-1] if len(zebras[-1]) > len(max_zebra) else max_zebra
            if i+1 > len(colors) - 1 or colors[i+1] != zebras[-1][-1]:
                zebras.append([color])
                continue

            zebras.append([zebras[-1][-1], color])
            continue

        if zebras[-1][-1] == color:
            max_zebra = zebras[-1] if len(zebras[-1]) > len(max_zebra) else max_zebra
            zebras.append([ color ])
            continue
    
    return f"{len(max_zebra)}@{max_zebra[-1]}"
