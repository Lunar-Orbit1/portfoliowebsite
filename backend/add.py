from json import load, dump
from requests import get 

def getData(id):
    req = get(f'https://economy.roblox.com/v2/developer-products/{id}/info')
    if req.status_code == 200:
        return req.json()
    else:
        print(req.status_code)
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
    audioid = int(input("Audio id: "))
    if audioid:
        print("Fetching data..")
        robloxdata = getData(audioid)
        if robloxdata != None:
            print(f"Name: {robloxdata['Name']}\nID: {audioid}\nURL: https://create.roblox.com/store/asset/{audioid}")
            res = yorno("Is this correct?")
            if res == True:
                #Get tags
                tags = getTags()
                f = open('audiolist.json', 'r+')
                jsondata = load(f)
                jsondata['audios'].append({
                    "name": robloxdata['Name'],
                    'id': audioid,
                    'tags': tags
                })
                f.seek(0)
                dump(jsondata, f, indent=4)
                f.close()
        else:
            print("Failed to fetch")
    
    ask()

ask()
