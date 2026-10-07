import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HimBazaar'),
        actions: [
          IconButton(
            onPressed: () => context.push('/profile'),
            icon: const Icon(Icons.person_outline),
          ),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.notifications_outlined),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
        children: [
          const Text('Deliver to India ▾', style: TextStyle(color: AppColors.muted, fontSize: 13)),
          const SizedBox(height: 12),
          TextField(
            readOnly: true,
            onTap: () => context.go('/search'),
            decoration: const InputDecoration(
              hintText: 'Search Himachali honey, ghee…',
              prefixIcon: Icon(Icons.search),
            ),
          ),
          const SizedBox(height: 20),
          Container(
            height: 180,
            decoration: BoxDecoration(
              color: AppColors.deep,
              borderRadius: BorderRadius.circular(14),
            ),
            padding: const EdgeInsets.all(20),
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Text('From the Himalayas', style: TextStyle(color: AppColors.gold, fontSize: 12, letterSpacing: 1.2)),
                SizedBox(height: 6),
                Text('to Your Home', style: TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.w600)),
              ],
            ),
          ),
          const SizedBox(height: 24),
          _sectionTitle('Categories'),
          SizedBox(
            height: 96,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              itemCount: 8,
              separatorBuilder: (_, __) => const SizedBox(width: 10),
              itemBuilder: (_, i) {
                const labels = ['Honey', 'Ghee', 'Tea', 'Shawls', 'Spices', 'Pickles', 'Crafts', 'Gifts'];
                return Container(
                  width: 88,
                  decoration: BoxDecoration(
                    color: AppColors.cream,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  alignment: Alignment.center,
                  child: Text(labels[i], style: const TextStyle(color: AppColors.deep, fontWeight: FontWeight.w500)),
                );
              },
            ),
          ),
          const SizedBox(height: 24),
          _sectionTitle('Best sellers'),
          ...List.generate(3, (i) {
            const names = ['A2 Desi Cow Ghee', 'Himachali Raw Honey', 'Kinnauri Red Rajma'];
            return ListTile(
              contentPadding: EdgeInsets.zero,
              leading: Container(width: 56, height: 56, color: AppColors.cream),
              title: Text(names[i]),
              subtitle: const Text('From verified local sellers'),
              onTap: () => context.push('/product/${names[i].toLowerCase().replaceAll(' ', '-')}'),
            );
          }),
          const SizedBox(height: 12),
          _sectionTitle('Explore'),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              _chip(context, 'Regions', '/regions'),
              _chip(context, 'Stories', '/stories'),
              _chip(context, 'Orders', '/orders'),
              _chip(context, 'Settings', '/settings'),
            ],
          ),
        ],
      ),
    );
  }

  static Widget _sectionTitle(String text) => Padding(
        padding: const EdgeInsets.only(bottom: 12),
        child: Text(text, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w600, color: AppColors.deep)),
      );

  static Widget _chip(BuildContext context, String label, String path) => ActionChip(
        label: Text(label),
        onPressed: () => context.push(path),
      );
}
