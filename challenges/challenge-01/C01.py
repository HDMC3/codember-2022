from functools import reduce
from operator import add

def validate_user(user_data: str):
    user_values = user_data.split(' ')
    verified_attributes = {'usr': 0, 'eme': 0, 'psw': 0, 'age': 0, 'loc': 0, 'fll': 0}
    last_valid_user = ''
    for value in user_values:
        key = value[0:3]
        attr = verified_attributes.get(key)
        if attr == None or attr == 1:
            continue
        
        if key == 'usr':
            last_valid_user = value[4:]
        verified_attributes[key] += 1
        
    return (reduce(add, verified_attributes.values()) == 6, last_valid_user)


def resolve():
    input_file = open('users.txt', 'r')

    users = []
    current_user = ''
    for line in input_file:
        if line != '\n':
            current_user += line.replace('\n', ' ')
        else:
            users.append(current_user.strip())
            current_user = ''

    valid_users = []
    last_valid_user = ''
    for user in users:
        validation_result = validate_user(user)
        if not validation_result[0]:
            continue
        
        last_valid_user = validation_result[1]
        valid_users.append(validation_result[1])

    return f'{len(valid_users)}:{last_valid_user}'