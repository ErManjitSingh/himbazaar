import 'package:dio/dio.dart';

/// Future-ready Dio client — point baseUrl at Node API when live.
class ApiClient {
  ApiClient({String? baseUrl})
      : dio = Dio(
          BaseOptions(
            baseUrl: baseUrl ?? const String.fromEnvironment(
              'API_URL',
              defaultValue: 'http://localhost:4000/api',
            ),
            connectTimeout: const Duration(seconds: 15),
            receiveTimeout: const Duration(seconds: 15),
          ),
        );

  final Dio dio;
}
