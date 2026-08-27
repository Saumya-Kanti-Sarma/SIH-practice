import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const completedTasks = [
  { room: '302', task: 'Room cleaning', date: '27 Aug 2026', status: 'Passed', color: '#14b96a' },
  { room: '708', task: 'Inspection', date: '27 Aug 2026', status: 'Passed', color: '#14b96a' },
  { room: '105', task: 'Maintenance check', date: '26 Aug 2026', status: 'Failed', color: '#f24d5b' },
  { room: '603', task: 'Room preparation', date: '25 Aug 2026', status: 'Passed', color: '#14b96a' },
];

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>Your activity</Text><Text style={styles.title}>History</Text><Text style={styles.subtitle}>Completed tasks and recent outcomes.</Text>
        <View style={styles.filter}><Text style={styles.filterActive}>All activity</Text><Text style={styles.filterMuted}>Passed</Text><Text style={styles.filterMuted}>Failed</Text></View>
        <Text style={styles.sectionTitle}>August 2026</Text>
        {completedTasks.map((item) => <View key={`${item.room}-${item.date}`} style={styles.historyCard}><View style={[styles.statusIcon, { backgroundColor: `${item.color}1c` }]}><MaterialIcons name={item.status === 'Passed' ? 'check' : 'close'} size={19} color={item.color} /></View><View style={styles.copy}><Text style={styles.task}>{item.task}</Text><Text style={styles.room}>Room {item.room}</Text><Text style={styles.date}>{item.date}</Text></View><Text style={[styles.status, { color: item.color }]}>{item.status}</Text></View>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7fafc' }, content: { padding: 20, paddingBottom: 30 }, eyebrow: { color: '#7d8996', fontSize: 12, marginTop: 8 }, title: { color: '#172b43', fontSize: 28, fontWeight: '800', marginTop: 5 }, subtitle: { color: '#82909e', fontSize: 13, marginTop: 5 },
  filter: { backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, padding: 5 }, filterActive: { backgroundColor: '#e6f8ef', borderRadius: 7, color: '#14a963', fontSize: 11, fontWeight: '800', paddingHorizontal: 14, paddingVertical: 9 }, filterMuted: { color: '#8995a2', fontSize: 11, paddingHorizontal: 14, paddingVertical: 9 }, sectionTitle: { color: '#29394c', fontSize: 14, fontWeight: '800', marginBottom: 12, marginTop: 26 },
  historyCard: { alignItems: 'center', backgroundColor: '#fff', borderRadius: 14, flexDirection: 'row', marginBottom: 11, padding: 14, shadowColor: '#b6c2ce', shadowOpacity: 0.1, shadowRadius: 8, elevation: 2 }, statusIcon: { alignItems: 'center', borderRadius: 22, height: 38, justifyContent: 'center', width: 38 }, copy: { flex: 1, marginLeft: 12 }, task: { color: '#34465a', fontSize: 12, fontWeight: '800' }, room: { color: '#7e8a96', fontSize: 11, marginTop: 3 }, date: { color: '#a0aab4', fontSize: 10, marginTop: 6 }, status: { fontSize: 11, fontWeight: '800' },
});