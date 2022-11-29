from functools import reduce

def resolve():
    valids = []
    n_range = map(lambda n: str(n), range(11098, 98123))
    for nStr in n_range:
        have_two_five = len(nStr.replace('5', '')) <= 3
        asc_count = reduce(lambda acc, i: acc + 1 if int(nStr[i]) >= int(nStr[i-1]) else acc, range(1, 5), 0)
        if have_two_five and asc_count == 4:
            valids.append(nStr)

    return f"{len(valids)}-{valids[55]}"
