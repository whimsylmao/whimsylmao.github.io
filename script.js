--- a/script.js
+++ b/script.js
@@ -1,5 +1,5 @@
-import * as PlayFab from 'playfab-sdk';
-import * as PlayFabAuthentication from 'playfab-sdk';
+import * as PlayFab from 'playfab-web-sdk';
+import * as PlayFabAuthentication from 'playfab-web-sdk';
 import { titleId } from 'config';
 
 document.getElementById('titleIdInput').value = titleId;
@@ -12,9 +12,6 @@
     const numUsers = document.getElementById('numUsers').value;
     const statusElement = document.getElementById('status');
 
-    statusElement.textContent = `spamming ${numUsers} players.`;
-
-
     const titleId = document.getElementById('titleIdInput').value;
     if (!titleId) {
         statusElement.textContent = 'please enter a title id first..!';

