import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWorker, workers } from '@/components/worker-context';

const menuItems = [
  { icon: 'person-outline', label: 'Personal information', detail: 'Update your details' },
  { icon: 'notifications-none', label: 'Notifications', detail: 'Task reminders are on' },
  { icon: 'help-outline', label: 'Help and support', detail: 'Get assistance' },
];

export default function ProfileScreen() {
  const { selectedWorker, setSelectedWorker } = useWorker();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>Account</Text><Text style={styles.title}>Profile</Text>
        <View style={styles.profileCard}><View style={styles.avatar}><Text style={styles.avatarText}>S</Text></View><View><Text style={styles.name}>Saumya</Text><Text style={styles.role}>Housekeeping employee</Text><View style={styles.active}><View style={styles.dot} /><Text>Active today</Text></View></View></View>
        <View style={styles.stats}><View><Text style={styles.statNumber}>24</Text><Text style={styles.statLabel}>Tasks completed</Text></View><View style={styles.statDivider} /><View><Text style={styles.statNumber}>96%</Text><Text style={styles.statLabel}>Pass rate</Text></View><View style={styles.statDivider} /><View><Text style={styles.statNumber}>4.8</Text><Text style={styles.statLabel}>Rating</Text></View></View>
        <Text style={styles.sectionTitle}>Demo tester</Text>
        <Text style={styles.selectorHint}>Choose a worker to preview their assigned task on Home.</Text>
        <View style={styles.workerCard}>{workers.map((worker) => { const selected = worker.name === selectedWorker.name; const color = worker.task === 'Inspection' ? '#800000' : '#14b96a'; return <Pressable key={worker.name} onPress={() => setSelectedWorker(worker)} style={[styles.workerOption, selected && { borderColor: color, backgroundColor: `${color}12` }]}><View style={[styles.workerAvatar, { backgroundColor: `${color}18` }]}><Text style={[styles.workerInitial, { color }]}>{worker.name.charAt(0)}</Text></View><View style={styles.workerCopy}><Text style={styles.workerName}>{worker.name}</Text><Text style={styles.workerTask}>{worker.task} · Room {worker.roomNo}</Text></View>{selected && <MaterialIcons name="check-circle" size={21} color={color} />}</Pressable>; })}</View>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.menuCard}>{menuItems.map((item) => <View key={item.label} style={styles.menuItem}><View style={styles.menuIcon}><MaterialIcons name={item.icon as any} size={20} color="#14b96a" /></View><View style={styles.menuCopy}><Text style={styles.menuLabel}>{item.label}</Text><Text style={styles.menuDetail}>{item.detail}</Text></View><MaterialIcons name="chevron-right" size={21} color="#a3adb8" /></View>)}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7fafc' }, content: { padding: 20, paddingBottom: 30 }, eyebrow: { color: '#7d8996', fontSize: 12, marginTop: 8 }, title: { color: '#172b43', fontSize: 28, fontWeight: '800', marginTop: 5 }, profileCard: { alignItems: 'center', backgroundColor: '#fff', borderRadius: 16, flexDirection: 'row', marginTop: 24, padding: 18, shadowColor: '#b6c2ce', shadowOpacity: 0.13, shadowRadius: 10, elevation: 2 }, avatar: { alignItems: 'center', backgroundColor: '#d9f4e7', borderRadius: 34, height: 66, justifyContent: 'center', marginRight: 14, width: 66 }, avatarText: { color: '#14a963', fontSize: 28, fontWeight: '800' }, name: { color: '#25394f', fontSize: 18, fontWeight: '800' }, role: { color: '#84919d', fontSize: 11, marginTop: 4 }, active: { alignItems: 'center', flexDirection: 'row', gap: 5, marginTop: 9 }, activeText: { color: '#4f9b76', fontSize: 10 }, dot: { backgroundColor: '#14b96a', borderRadius: 4, height: 7, width: 7 }, stats: { alignItems: 'center', backgroundColor: '#eaf8f1', borderRadius: 14, flexDirection: 'row', justifyContent: 'space-around', marginTop: 13, padding: 16 }, statNumber: { color: '#14a963', fontSize: 18, fontWeight: '800', textAlign: 'center' }, statLabel: { color: '#67937d', fontSize: 9, marginTop: 4, textAlign: 'center' }, statDivider: { backgroundColor: '#cce9d9', height: 28, width: 1 }, sectionTitle: { color: '#29394c', fontSize: 14, fontWeight: '800', marginBottom: 12, marginTop: 26 }, selectorHint: { color: '#82909e', fontSize: 11, marginTop: -5, marginBottom: 12 }, workerCard: { backgroundColor: '#fff', borderRadius: 15, padding: 10, shadowColor: '#b6c2ce', shadowOpacity: 0.1, shadowRadius: 9, elevation: 2 }, workerOption: { alignItems: 'center', borderColor: '#edf0f2', borderRadius: 10, borderWidth: 1, flexDirection: 'row', marginBottom: 8, padding: 10 }, workerAvatar: { alignItems: 'center', borderRadius: 20, height: 38, justifyContent: 'center', width: 38 }, workerInitial: { fontSize: 16, fontWeight: '800' }, workerCopy: { flex: 1, marginLeft: 10 }, workerName: { color: '#34465a', fontSize: 12, fontWeight: '800' }, workerTask: { color: '#8995a2', fontSize: 10, marginTop: 3 }, menuCard: { backgroundColor: '#fff', borderRadius: 15, paddingHorizontal: 13, shadowColor: '#b6c2ce', shadowOpacity: 0.1, shadowRadius: 9, elevation: 2 }, menuItem: { alignItems: 'center', borderBottomColor: '#edf0f2', borderBottomWidth: 1, flexDirection: 'row', minHeight: 65 }, menuIcon: { alignItems: 'center', backgroundColor: '#e6f8ef', borderRadius: 8, height: 34, justifyContent: 'center', width: 34 }, menuCopy: { flex: 1, marginLeft: 11 }, menuLabel: { color: '#34465a', fontSize: 12, fontWeight: '800' }, menuDetail: { color: '#8995a2', fontSize: 10, marginTop: 4 },
});