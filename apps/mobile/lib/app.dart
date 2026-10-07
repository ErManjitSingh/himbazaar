import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:himbazaar_mobile/routing/app_router.dart';
import 'package:himbazaar_mobile/theme/app_theme.dart';

class HimBazaarApp extends ConsumerWidget {
  const HimBazaarApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(appRouterProvider);

    return MaterialApp.router(
      title: 'HimBazaar',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light,
      routerConfig: router,
    );
  }
}
