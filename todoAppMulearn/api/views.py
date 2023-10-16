from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from todos.models import Task
from .serializers import TaskSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication


@api_view(['GET'])
# @authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def api_home(request):
    tasks = Task.objects.filter(user=request.user)
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def api_add_todo(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        # Assign the current user to the task
        serializer.validated_data['user'] = request.user
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def api_delete_todo(request, todo_id):
    try:
        # Get the todo object by its ID
        todo = Task.objects.get(pk=todo_id)

        # Check if the todo belongs to the current user
        if todo.user == request.user:
            todo.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({'detail': 'You do not have permission to delete this todo.'}, status=status.HTTP_403_FORBIDDEN)
    except Task.DoesNotExist:
        return Response({'detail': 'Todo not found.'}, status=status.HTTP_404_NOT_FOUND)