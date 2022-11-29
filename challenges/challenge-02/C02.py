def resolve():
    encrypt_message = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
    start_idx = 0
    encrypt_message_len = len(encrypt_message)
    message = ""
    for i in range(1, encrypt_message_len + 1):
        chars = encrypt_message[start_idx : i]
        if chars == ' ':
            message += chars
            continue

        if int(chars) >= 97:
            message += chr(int(chars))
            start_idx = i

    return message