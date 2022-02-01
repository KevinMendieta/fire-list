const admin = require("firebase-admin");
const functions = require("firebase-functions");

const DOCUMENTS = {
  task: "users/{userId}/lists/{listId}/tasks/{taskId}",
  getTaskPath: (userId, listId, taskId) =>
    `users/${userId}/lists/${listId}/tasks/${taskId}`,
};

module.exports = {
  onTaskCreation: functions.firestore
      .document(DOCUMENTS.task)
      .onCreate(async (_snapshot, context) => {
        const userId = context.params.userId;
        const listId = context.params.listId;
        const taskId = context.params.taskId;

        const taskDocument = await admin
            .firestore()
            .doc(DOCUMENTS.getTaskPath(userId, listId, taskId))
            .get();

        return taskDocument.ref.set({completedAt: null}, {merge: true});
      }),
};
