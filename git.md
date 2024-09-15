1. blob
blob 是 binary large object的縮寫
就是紀錄工作目錄中某個檔案的內容(只儲存內容)
它以文件的 SHA-1 哈希作為標識，因此相同的文件內容只會存儲一次
每次git add 時會產生一個blob

2. tree
儲存特定目錄下的所有資訊，包含該目錄下的檔名、對應的 blob 物件名稱、檔案連結(symbolic link) 或其他 tree 物件等等

3. commit
一個pointer指到tree也可以指到另一個commit
作用是用來記錄有哪些 tree 物件包含在版本中，一個 commit 物件代表著 Git 的一次提交
還會記錄特定提交版本有哪些：tree 物件、以及版本提交的時間、紀錄訊息等等

4. branch 
branch 是一個pointer 指向commit 可以用來控制commit

5. head
head 用來幫助git知道我現在的branch在哪，也是一個pointer，指到現在的branch
git checkout 就是改變head指到的branch



