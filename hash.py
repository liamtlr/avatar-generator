def hashval(str):
    # hash = 0
    # Take ordinal number of char in str, and just add
    # for x in str: hash += (ord(x))
    # print(hash, "hash")
    # print (hash % siz, "modulus")
    return(str % 999) # Depending on the range, do a modulo operation.

print(hashval(456), 456)
print(hashval(12), 12)
print(hashval(10567), 10567)
print(hashval(9874356), 9874356)
