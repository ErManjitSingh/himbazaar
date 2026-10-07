import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:himbazaar_mobile/features/cart/cart_screen.dart';
import 'package:himbazaar_mobile/features/catalog/categories_screen.dart';
import 'package:himbazaar_mobile/features/home/home_shell.dart';
import 'package:himbazaar_mobile/features/home/home_screen.dart';
import 'package:himbazaar_mobile/features/onboarding/onboarding_screen.dart';
import 'package:himbazaar_mobile/features/product/product_detail_screen.dart';
import 'package:himbazaar_mobile/features/profile/profile_screen.dart';
import 'package:himbazaar_mobile/features/search/search_screen.dart';
import 'package:himbazaar_mobile/features/splash/splash_screen.dart';
import 'package:himbazaar_mobile/features/wishlist/wishlist_screen.dart';
import 'package:himbazaar_mobile/features/auth/login_screen.dart';
import 'package:himbazaar_mobile/features/orders/orders_screen.dart';
import 'package:himbazaar_mobile/features/orders/track_order_screen.dart';
import 'package:himbazaar_mobile/features/checkout/checkout_screen.dart';
import 'package:himbazaar_mobile/features/stories/stories_screen.dart';
import 'package:himbazaar_mobile/features/region/regions_screen.dart';
import 'package:himbazaar_mobile/features/seller/seller_screen.dart';
import 'package:himbazaar_mobile/features/settings/settings_screen.dart';

final appRouterProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    initialLocation: '/splash',
    routes: [
      GoRoute(path: '/splash', builder: (_, __) => const SplashScreen()),
      GoRoute(path: '/onboarding', builder: (_, __) => const OnboardingScreen()),
      GoRoute(path: '/login', builder: (_, __) => const LoginScreen()),
      StatefulShellRoute.indexedStack(
        builder: (context, state, navigationShell) {
          return HomeShell(navigationShell: navigationShell);
        },
        branches: [
          StatefulShellBranch(routes: [
            GoRoute(path: '/home', builder: (_, __) => const HomeScreen()),
          ]),
          StatefulShellBranch(routes: [
            GoRoute(path: '/categories', builder: (_, __) => const CategoriesScreen()),
          ]),
          StatefulShellBranch(routes: [
            GoRoute(path: '/search', builder: (_, __) => const SearchScreen()),
          ]),
          StatefulShellBranch(routes: [
            GoRoute(path: '/wishlist', builder: (_, __) => const WishlistScreen()),
          ]),
          StatefulShellBranch(routes: [
            GoRoute(path: '/cart', builder: (_, __) => const CartScreen()),
          ]),
        ],
      ),
      GoRoute(
        path: '/product/:slug',
        builder: (_, state) =>
            ProductDetailScreen(slug: state.pathParameters['slug']!),
      ),
      GoRoute(path: '/profile', builder: (_, __) => const ProfileScreen()),
      GoRoute(path: '/orders', builder: (_, __) => const OrdersScreen()),
      GoRoute(path: '/track-order', builder: (_, __) => const TrackOrderScreen()),
      GoRoute(path: '/checkout', builder: (_, __) => const CheckoutScreen()),
      GoRoute(path: '/stories', builder: (_, __) => const StoriesScreen()),
      GoRoute(path: '/regions', builder: (_, __) => const RegionsScreen()),
      GoRoute(
        path: '/seller/:slug',
        builder: (_, state) =>
            SellerScreen(slug: state.pathParameters['slug']!),
      ),
      GoRoute(path: '/settings', builder: (_, __) => const SettingsScreen()),
    ],
  );
});
