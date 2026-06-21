resource "aws_ecs_service" "frontend_service" {
  name            = "frontend-service-v2"
  cluster         = aws_ecs_cluster.my_cluster.arn
  task_definition = aws_ecs_task_definition.frontend.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  force_new_deployment = true

  network_configuration {
    assign_public_ip = true
    subnets          = [aws_subnet.ecs_subnet.id, aws_subnet.ecs_subnet2.id]
    security_groups  = [aws_security_group.frontend_security_group.id]
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.frontend_tg.arn
    container_name   = "frontend"
    container_port   = 3000
  }

  depends_on = [
    aws_lb_listener.frontend_listener
  ]
}