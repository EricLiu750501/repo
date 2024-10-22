**1. 你的網址，應該是 https://www.xxx.xxx，點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）** 
   [https://www.hongsproj.ninja/](http://www.hongsproj.ninja/)      
   
**2. 你在哪裡購買網域的**   
   在 Discord 中看到同學分享的 GitHub Education 免費的 domain 註冊：name.com     

**3. DNS 的 A record 是什麼？**   
「A」代表「位址」，這是最基礎的 DNS 記錄類型：它表示給定網域的 IP 位址。例如，拉取 cloudflare.com 的 DNS 記錄，A 記錄當前傳回的 IP 位址為：104.17.210.9。    

**4. DNS 的 NS record 是什麼？**    
    NS 代表「名稱伺服器」，名稱伺服器記錄指示哪個 DNS 伺服器對該網域具有權威性 (即，哪個伺服器包含實際 DNS 記錄)。基本上，NS 記錄告訴網際網路可從哪裡找到網域的 IP 位址。一個網域通常會有多個 NS 記錄，這些記錄可指示該網域的主要和次要名稱伺服器。倘若沒有正確設定的 NS 記錄，使用者將無法載入網站或應用程式。  

**5. Domain Name vs FQDN vs URL 這三者分別為何？**    
   - Domain Name： 是用來識別一個網站或其他網路資源的易於記憶的名稱                   
   - FQDN：是 Fully qualified domain name 完全限定域名， 
   - URL：是 Uniform Resource Locator ，網址是用來指定網路上某一資源的具體地址，並且包括協議（如 HTTP、HTTPS）、域名、路徑和其他可選的參數。URL 提供了訪問資源所需的完整信息。         
   以[https://www.nccu.edu.tw/app/home.php](https://www.nccu.edu.tw/app/home.php)為例
   - Domain Name 是 `nccu.edu.tw`
   - FQDN 是 `www.nccu.edu.tw`
   - URL 是 `https://www.nccu.edu.tw/app/home.php`        

**6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？**    
   HTTPS 會加密在瀏覽器和網站之間傳輸的數據，防止第三方攔截、竊取數據或是被篡改，而且現在瀏覽器現在會主動標明 http 是不安全的，所以也會對 user 產生不好的觀感   