Below are the `curl` commands for testing the various APIs of your Django Todo App. Make sure to replace placeholders like `{your_username}`, `{your_password}`, `{your_token}`, `{your_task_id}`, and `{your_todo_details}` with your actual data.

1. **Obtaining JWT Token (Authentication):**

   ```shell
   curl -X POST http://localhost:8000/api/token/ -d "username={your_username}&password={your_password}"
   ```

2. **Viewing Todos (GET request with JWT Token):**

   ```shell
   curl -X GET http://localhost:8000/api/ -H "Authorization: Bearer {your_token}"
   ```

3. **Adding a Todo (POST request with JWT Token):**

   ```shell
   curl -X POST http://localhost:8000/api/add_todo/ -d "title={your_todo_details}" -H "Authorization: Bearer {your_token}"
   ```

4. **Deleting a Todo (DELETE request with JWT Token and Todo ID):**

   ```shell
   curl -X DELETE http://localhost:8000/api/delete_todo/{your_task_id}/ -H "Authorization: Bearer {your_token}"
   ```

5. **Updating Todo State (PATCH request with JWT Token and Todo ID):**

   ```shell
   curl -X PATCH http://localhost:8000/api/toggle_task_state/{your_task_id}/ -H "Authorization: Bearer {your_token}"
   ```

These commands will help you interact with the APIs of your Django Todo App for testing and development. Remember to use valid user credentials and task IDs as needed.
