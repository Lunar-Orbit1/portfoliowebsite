from json import load, dump
from requests import get 

def getData(id):
    req = get(f'https://economy.roblox.com/v2/assets/{id}/details')
    if req.status_code == 200:
        return req.json()
    else:
        return None

def yorno(question):
    userinput = input(question+" (yes or no): ")
    userinput = userinput.lower()
    if userinput == "y" or userinput == "yes" or userinput == "true":
        return True 
    elif userinput == "n" or userinput == "no" or userinput == "false":
        return False
    else:
        print(f"{userinput} isn't a yes or a no")
        return yorno(question)
    
def getTags():
    tags = input("Add tags, seperated by commas: ")
    tList = []
    for x in tags.split(','):
        tList.append(x)
    return tList

def ask():
    audioid = int("Audio id: ")
    if audioid:
        print("Fetching data..")
        robloxdata = getData(audioid)
        if robloxdata:
            print(f"Name: {robloxdata['name']}\nID: {audioid}")
            res = yorno("Is this correct?")
            if res == True:
                #Get tags
                tags = getTags()
                f = open('audiolist.json', 'r+')
                jsondata = load(f)
                jsondata['audios'].append({
                    "name": robloxdata['name'],
                    'id': audioid,
                    'tags': tags
                })
                dump(jsondata, f)
                f.close()
    
    ask()

ask()
