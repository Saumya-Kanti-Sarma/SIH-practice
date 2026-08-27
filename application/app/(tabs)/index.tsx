import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWorker } from '@/components/worker-context';

const taskRows = [
  { icon: 'assignment', label: 'Task Type', value: 'Inspection', tint: '#61cda0' },
  { icon: 'cleaning-services', label: 'Room Condition', value: 'Already clean / inspection only', tint: '#f2b25e', badge: '5' },
  { icon: 'info-outline', label: 'Notes', value: 'Quick check before guest arrival.', tint: '#6ca7df' },
];

type TaskState = 'pending' | 'passed' | 'failed';

export default function HomeScreen() {
  const [taskState, setTaskState] = useState<TaskState>('pending');
  const { selectedWorker } = useWorker();
  const isInspection = selectedWorker.task === 'Inspection';
  const taskColor = isInspection ? '#800000' : '#14b96a';

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable style={styles.iconButton} accessibilityLabel="Open menu">
            <MaterialIcons name="menu" size={23} color="#7b8794" />
          </Pressable>
          <Pressable style={styles.iconButton} accessibilityLabel="Notifications">
            <MaterialIcons name="notifications-none" size={23} color="#7b8794" />
            <View style={styles.notificationDot} />
          </Pressable>
        </View>

        <View style={styles.greetingRow}>
          <View>
            <Text style={styles.eyebrow}>Good Morning,</Text>
            <Text style={styles.greeting}>{selectedWorker.name} </Text>
            <Text style={styles.subtitle}>You have 3 tasks today</Text>
            <View style={[styles.statusPill, { backgroundColor: `${taskColor}22`, borderColor: `${taskColor}55` }]}><MaterialIcons name={isInspection ? 'fact-check' : 'cleaning-services'} size={50} color={taskColor} /><Text style={[styles.statusText, { color: taskColor }]}>{selectedWorker.task}</Text></View>
          </View>
          <View style={styles.illustration}>
            <View style={styles.door}><Text style={styles.doorLabel}>{selectedWorker.roomNo}</Text><MaterialIcons name="door-front" size={62} color="#56bc96" /></View>
            <MaterialIcons name="local-florist" size={39} color="#7dcaaf" style={styles.leaf} />
            <MaterialIcons name="cleaning-services" size={39} color="#f2b25e" style={styles.cart} />
          </View>
        </View>

        <View style={styles.roomCard}>
          <View style={styles.roomCardTop}>
            <View>
              <Text style={styles.roomLabel}>Room Number</Text>
              <Text style={styles.roomNumber}>{selectedWorker.roomNo}</Text>

            </View>
            <View style={[styles.taskIcon, { backgroundColor: `${taskColor}12` }]}><MaterialIcons name={isInspection ? 'fact-check' : 'cleaning-services'} size={42} color={taskColor} /></View>
          </View>
          <View style={styles.arrivalStrip}>
            <View style={styles.arrivalItem}><MaterialIcons name="event" size={17} color="#7f8994" /><View><Text style={styles.smallLabel}>Guest Arriving In</Text><Text style={[styles.arrivalValue, { color: taskColor }]}>{selectedWorker.guestArriving}</Text></View></View>
            <View style={styles.divider} />
            <View style={styles.arrivalItem}><Text style={styles.smallLabel}>Task Priority</Text><View style={styles.highBadge}><Text style={[styles.highText, { backgroundColor: taskColor }]}>{selectedWorker.priorityScore >= 70 ? 'High' : selectedWorker.priorityScore >= 40 ? 'Medium' : 'Low'}</Text><MaterialIcons name="keyboard-arrow-up" size={14} color={taskColor} /></View></View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Task Details</Text>
        <View style={styles.detailsCard}>
          {taskRows.map((row, index) => (
            <View key={row.label} style={[styles.taskRow, index < taskRows.length - 1 && styles.taskRowBorder]}>
              <View style={[styles.rowIcon, { backgroundColor: `${index === 0 ? taskColor : row.tint}22` }]}><MaterialIcons name={row.icon as any} size={19} color={index === 0 ? taskColor : row.tint} /></View>
              <View style={styles.rowCopy}><Text style={styles.rowLabel}>{row.label}</Text><Text style={styles.rowValue}>{index === 0 ? selectedWorker.task : row.value}</Text></View>
              {row.badge ? <View style={styles.countBadge}><Text style={styles.countText}>{row.badge}</Text></View> : <MaterialIcons name="chevron-right" size={21} color="#9aa4ae" />}
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <Pressable style={[styles.actionButton, styles.passButton, taskState === 'passed' && styles.selectedButton]} onPress={() => setTaskState('passed')}>
            <MaterialIcons name="check-circle" size={22} color="#fff" /><Text style={styles.actionText}>Pass</Text>
          </Pressable>
          <Pressable style={[styles.actionButton, styles.failButton, taskState === 'failed' && styles.selectedButton]} onPress={() => setTaskState('failed')}>
            <MaterialIcons name="cancel" size={22} color="#fff" /><Text style={styles.actionText}>Failed</Text>
          </Pressable>
          {taskState !== 'pending' && <Text style={styles.resultText}>Task marked {taskState}.</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7fafc' },
  content: { paddingHorizontal: 20, paddingBottom: 28 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  iconButton: { width: 37, height: 37, borderRadius: 11, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: '#b8c3cf', shadowOpacity: 0.2, shadowRadius: 8, elevation: 2 },
  notificationDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#f24d5b', position: 'absolute', right: 7, top: 7 },
  greetingRow: { flexDirection: 'row', justifyContent: 'space-between', minHeight: 126, marginBottom: 13 },
  eyebrow: { color: '#6f7c8a', fontSize: 12, fontWeight: '500', marginBottom: 5 },
  greeting: { color: '#172b43', fontSize: 23, fontWeight: '800' },
  wave: { fontSize: 20 },
  subtitle: { color: '#82909e', fontSize: 12, marginTop: 8 },
  illustration: { width: 138, height: 112, position: 'relative', marginTop: -5 },
  door: { position: 'absolute', right: 35, top: 0, width: 49, height: 90, backgroundColor: '#d8f2e8', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 5 },
  doorLabel: { position: 'absolute', top: 12, zIndex: 2, fontSize: 8, color: '#fff', fontWeight: '800' },
  leaf: { position: 'absolute', left: 7, bottom: 3 },
  cart: { position: 'absolute', right: 0, bottom: 0 },
  roomCard: { backgroundColor: '#fff', borderRadius: 18, padding: 15, shadowColor: '#b6c2ce', shadowOpacity: 0.17, shadowRadius: 14, elevation: 3 },
  roomCardTop: { flexDirection: 'row', justifyContent: 'space-between', minHeight: 92 },
  roomLabel: { color: '#9aa4ae', fontSize: 10, marginBottom: 3 },
  roomNumber: { color: '#172b43', fontSize: 37, fontWeight: '800', lineHeight: 42 },
  statusPill: { alignItems: 'center', alignSelf: 'flex-start', backgroundColor: '#dcf7e9', borderColor: '#20a76a55', borderRadius: 8, borderWidth: 1, flexDirection: 'row', gap: 6, minHeight: 34, paddingHorizontal: 12, paddingVertical: 6, marginTop: 8 },
  statusText: { color: '#20a76a', fontSize: 25, fontWeight: '800' },
  taskIcon: { alignItems: 'center', backgroundColor: '#fff6e9', borderRadius: 32, height: 62, justifyContent: 'center', width: 62 },
  arrivalStrip: { alignItems: 'center', backgroundColor: '#fffaf4', borderRadius: 10, flexDirection: 'row', minHeight: 53, paddingHorizontal: 12 },
  arrivalItem: { alignItems: 'center', flex: 1, flexDirection: 'row', gap: 8 },
  divider: { backgroundColor: '#eee7df', height: 34, width: 1 },
  smallLabel: { color: '#8b9298', fontSize: 9, marginBottom: 4 },
  arrivalValue: { color: '#efa436', fontSize: 12, fontWeight: '800' },
  highBadge: { alignItems: 'center', flexDirection: 'row-reverse', gap: 2 },
  highText: { backgroundColor: '#f7bd68', borderRadius: 5, color: '#fff', fontSize: 9, fontWeight: '800', paddingHorizontal: 8, paddingVertical: 5 },
  sectionTitle: { color: '#29394c', fontSize: 12, fontWeight: '800', marginBottom: 10, marginTop: 21 },
  detailsCard: { backgroundColor: '#fff', borderRadius: 15, paddingHorizontal: 13, shadowColor: '#b6c2ce', shadowOpacity: 0.13, shadowRadius: 10, elevation: 2 },
  taskRow: { alignItems: 'center', flexDirection: 'row', minHeight: 58 },
  taskRowBorder: { borderBottomColor: '#edf0f2', borderBottomWidth: 1 },
  rowIcon: { alignItems: 'center', borderRadius: 7, height: 31, justifyContent: 'center', width: 31 },
  rowCopy: { flex: 1, marginLeft: 10 },
  rowLabel: { color: '#34465a', fontSize: 10, fontWeight: '700', marginBottom: 3 },
  rowValue: { color: '#86919c', fontSize: 9 },
  countBadge: { alignItems: 'center', backgroundColor: '#fff2d8', borderRadius: 13, height: 25, justifyContent: 'center', width: 25 },
  countText: { color: '#efa436', fontSize: 11, fontWeight: '800' },
  actions: { gap: 8, marginTop: 14 },
  actionButton: { alignItems: 'center', borderRadius: 10, flexDirection: 'row', gap: 8, height: 40, justifyContent: 'center', paddingHorizontal: 13 },
  passButton: { backgroundColor: '#14b96a' },
  failButton: { backgroundColor: '#fa4248' },
  selectedButton: { shadowColor: '#20354b', shadowOpacity: 0.25, shadowRadius: 8, elevation: 4 },
  actionText: { color: '#fff', fontSize: 13, fontWeight: '800', textAlign: 'center' },
  resultText: { color: '#6f7c8a', fontSize: 11, textAlign: 'center' },
});
