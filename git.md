
* 說明 blob, tree, commit, branch, head 分別是什麼
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

* 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
在操作過程中我發現在.git/object裡面會新增一些檔案，這些檔案是blob, tree, commit 透過git cat-flie -t 可以知道他是哪一個

* commit message 應該怎麼寫比較好？應該有什麼 `style` 嗎？
不要空白，也不要寫太長，註新增、刪除、修改檔案，也要說這次commit改變了什麼功能，還有什麼問題還沒解決
commit message 的屬性，像是這次commit 是在做test , add , fix , hotfix 等等可以先一目瞭然知道這次commit在做什麼
